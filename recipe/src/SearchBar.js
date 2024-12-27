const SearchBar = ({ setSearchQuery }) => {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
    );
  };
  
  export default SearchBar;
  