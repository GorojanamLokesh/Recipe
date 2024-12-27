const FavoritesList = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="favorite-item">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3>{recipe.strMeal}</h3>
            <button
              onClick={() => toggleFavorite(recipe)}
              className="favorite-btn active"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
