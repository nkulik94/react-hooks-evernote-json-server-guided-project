import React from "react";

function Search( { onSearch, value } ) {
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" value={value} onChange={(e) => onSearch(e.target.value)}/>
    </div>
  );
}

export default Search;
