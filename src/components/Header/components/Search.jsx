function Search({ search, micro }) {
  return (
    <div className="search-section">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        {search}
      </div>
      <div className="mic">{micro}</div>
    </div>
  );
}

export default Search;
