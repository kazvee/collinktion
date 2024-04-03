import React, { useEffect, useState } from 'react';
import './styles.css';

const Links = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  if (loading) {
    return <div>⏳ Loading...</div>;
  }

  if (error) {
    return <div>☹️ Error: {error}</div>;
  }

  const filteredLinks = links.filter(
    (link) =>
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (link.categories &&
        link.categories.some((cat) =>
          cat.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  return (
    <div>
      <input
        type='text'
        className='search-box'
        placeholder='Search by Category, Title, or Description'
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul className='list'>
        {filteredLinks.map((link, index) => (
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
            <div>
              {link.categories.map((category, catIndex) => (
                <span key={catIndex} className='category'>
                  {category}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
