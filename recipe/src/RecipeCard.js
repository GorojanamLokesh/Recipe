const RecipeCard = ({ recipe, onClick, toggleFavorite, isFavorite }) => {
    return (
      <div className="recipe-card" onClick={onClick}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>{recipe.strMeal}</h3>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            toggleFavorite(recipe);
          }}
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    );
  };
  
  export default RecipeCard;
  