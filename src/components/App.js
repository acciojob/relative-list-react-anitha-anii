import React from 'react';

const App = () => {
  const relatives = [
    { key: 'relativeListItem1', name: 'Uncle John' },
    { key: 'relativeListItem2', name: 'Aunt Mary' },
    { key: 'relativeListItem3', name: 'Cousin Alex' },
    { key: 'relativeListItem4', name: 'Grandma Alice' },
    { key: 'relativeListItem5', name: 'Grandpa Bob' },
  ];

  return (
    <div>
      <h2>Diwali Shopping List</h2>
      <ol>
        {relatives.map((relative) => (
          <li key={relative.key}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;

