import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  const onSubmit = (term) => {
    console.log(term);
  }
  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={onSubmit}/>
    </div>
  );
};
export default App;