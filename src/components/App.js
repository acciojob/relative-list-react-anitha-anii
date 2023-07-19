import React from 'react';

const App = () => {
  const relatives = [
    { id:'relativeListItem1', key: 'relativeListItem1', name: 'Uncle John' },
    { id:'relativeListItem2', key: 'relativeListItem2', name: 'Aunt Mary' },
    { id:'relativeListItem3', key: 'relativeListItem3', name: 'Cousin Alex' },
    { id:'relativeListItem4', key: 'relativeListItem4', name: 'Grandma Alice' },
    { id:'relativeListItem5', key: 'relativeListItem5', name: 'Grandpa Bob' },
  ];

  return (
    <div>
      <h2>Diwali Shopping List</h2>
      <ol key='relativeList'id='relativeList'>
        {relatives.map((relative) => (
          <li id={relative.id} key={relative.key}>{relative.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
