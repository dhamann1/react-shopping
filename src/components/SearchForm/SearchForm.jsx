import React from 'react';

const SearchForm = (props) => {
  return (
    <div>
        <input
          type="text"
          onChange={(evt) => { props.updateSearch(evt) }}
          value={props.search}
          placeholder="Search Our Catalogue"
        />
    </div>
  )
}

export default SearchForm; 