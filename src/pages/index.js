import React from 'react';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: 16,
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  display: 'inline-block',
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const links = [
  {
    text: 'GitHub',
    url: 'https://github.com/',
    description: '🍊',
    color: '#E95800',
  },
  {
    text: 'Teal',
    url: '',
    description: '🩵',
    color: '#1099A8',
  },
  {
    text: 'Pink',
    url: '',
    description: '🩷',
    color: '#BC027F',
  },
  {
    text: 'Blue',
    url: '',
    description: '🔷',
    color: '#0D96F2',
  },
  {
    text: 'Green',
    url: '',
    description: '🟩',
    color: '#8EB814',
  },
  {
    text: 'Purple',
    url: '',
    badge: true,
    description: '🟣',
    color: '#663399',
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Collinktion
        <br />
        <span style={headingAccentStyles}>— a link collection 🔗</span>
      </h1>

      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Collinktion</title>;
