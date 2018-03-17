import React from 'react';

const SearchForm = (props) => {
  return (
    <div class="col-xs-6">
      <div class="input-group">
        <input
          type="text"
          onChange={(evt) => { props.updateSearch(evt) }}
          value={props.search}
          placeholder="Search Our Catalogue"
        />
      </div>
    </div>
  )
}

export default SearchForm; 