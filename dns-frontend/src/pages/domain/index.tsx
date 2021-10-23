import React from 'react';

const records = [
  { type: 'A', domain: 'lsong.org', address: '1.1.1.1', ttl: 200 },
  { type: 'A', domain: 'lsong.org', address: '1.1.1.1', ttl: 200 },
  { type: 'A', domain: 'lsong.org', address: '1.1.1.1', ttl: 200 },
  { type: 'A', domain: 'lsong.org', address: '1.1.1.1', ttl: 200 },
];

const Domain = ({ match, history }) => {
  const { params } = match;
  const { domain } = params;
  return (
    <div>
      <h2>{domain}</h2>
      <ul>
        {
          records.map((record, i) => (
            <li key={i} >
              <span>{ record.type }</span>
              <span>{ record.domain }</span>
              <span>{ record.address }</span>
              <span>{ record.ttl }</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Domain;