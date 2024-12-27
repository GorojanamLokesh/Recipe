import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe, onAddFavorite }) => {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="100" />
            <button onClick={() => onAddFavorite(recipe)}>Add to Favorites</button>
          </div>
        ))
      ) : (
        <p>No recipes found. Please search.</p>
      )}
    </div>
  );
};

export default RecipeList;
