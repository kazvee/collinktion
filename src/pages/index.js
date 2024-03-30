import React from 'react';
import Links from './Links';
import './styles.css';

const IndexPage = () => {
  return (
    <main className='page'>
      <h1 className='heading heading-accent'>Collinktion</h1>
      <p className='heading-accent'>— a link collection 🔗</p>
      <Links />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Collinktion</title>;
