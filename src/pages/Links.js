import React, { useEffect, useState } from 'react';
import './styles.css';

const Links = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const backendUrl = process.env.GATSBY_BACKEND_URL;
        const response = await fetch(backendUrl);
        if (!response.ok) {
          throw new Error('☹️ Failed to fetch data');
        }
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, [setLinks]);

  if (loading) {
    return <div>⏳ Loading...</div>;
  }

  if (error) {
    return <div>☹️ Error: {error}</div>;
  }

  return (
    <ul className='list'>
      {links.map((link, index) => (
        <li key={index} className='list-item'>
          <a
            className='link'
            href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.title}
          </a>
          <p className='description'>{link.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Links;
