import React from 'react';

const Person = ({ imageUrl, name, twitter }) => {
  const [firstName, lastName] = name.split(' ');
  return (
    <li className="person">
      <a
        href={`https://twitter.com/${twitter}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>
          {firstName}
          <br />
          {lastName}
        </div>
        <img src={imageUrl} alt={name} />
      </a>
    </li>
  );
};

export default Person;
