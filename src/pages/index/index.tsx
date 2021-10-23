import React from 'react';
import { Link } from 'react-router-dom';

const domains = [
  { domain: 'lsong.org' },
  { domain: 'lsong.one' },
  { domain: 'lsong.me' },
];

const Index = () => {
  return (
    <div>
      <h2>Domains</h2>
      <ul>
        {
          domains.map((domain, i) => (
            <li key={i} >
              <Link to={`/domain/${domain.domain}`}>{ domain.domain }</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Index;