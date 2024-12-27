const RecipeDetails = ({ recipe }) => {
    return (
      <div className="recipe-details">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>Ingredients:</h3>
        <ul>
          {[...Array(20)].map((_, index) => {
            const ingredient = recipe[`strIngredient${index + 1}`];
            const measure = recipe[`strMeasure${index + 1}`];
            if (ingredient) {
              return (
                <li key={index}>
                  {measure} {ingredient}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.strInstructions}</p>
      </div>
    );
  };
  
  export default RecipeDetails;
  