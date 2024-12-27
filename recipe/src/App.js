// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';
// import RecipeCard from './RecipeCard';
// import RecipeDetails from './RecipeDetails';
// import FavoritesList from './FavoritesList';
// import './App.css';


// const App = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
//   const [searchQuery, setSearchQuery] = useState('');
//   // <h1>Food-recepie-app</h1>
//   const searchRecipes = async (query) => {
//     try {
//       const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
//       setRecipes(response.data.meals || []);
//     } catch (error) {
//       console.error('Error fetching recipes', error);
//     }
//   };

//   const toggleFavorite = (recipe) => {
//     const newFavorites = [...favorites];
//     const recipeIndex = favorites.findIndex((fav) => fav.idMeal === recipe.idMeal);
//     if (recipeIndex === -1) {
//       newFavorites.push(recipe);
//     } else {
//       newFavorites.splice(recipeIndex, 1);
//     }
//     setFavorites(newFavorites);
//     localStorage.setItem('favorites', JSON.stringify(newFavorites));
//   };

//   useEffect(() => {
//     if (searchQuery) {
//       searchRecipes(searchQuery);
//     }
//   }, [searchQuery]);

//   // const toggleTheme = () => {
//   //   const currentTheme = localStorage.getItem('theme');
//   //   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//   //   localStorage.setItem('theme', newTheme);
//   //   document.documentElement.classList.toggle('dark', newTheme === 'dark');
//   // };
  
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       document.documentElement.classList.toggle('dark', savedTheme === 'dark');
//     }
//   }, []);
  

//   return (
//     <div className="app-container">
//       <SearchBar setSearchQuery={setSearchQuery} />
//       <div className="recipes-grid">
//         {recipes && recipes.map((recipe) => (
//           <RecipeCard
//             key={recipe.idMeal}
//             recipe={recipe}
//             onClick={() => setSelectedRecipe(recipe)}
//             toggleFavorite={toggleFavorite}
//             isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
//           />
//         ))}
//       </div>
//       {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
//       <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';
import FavoritesList from './FavoritesList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  const searchRecipes = async (query) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  };

  const toggleFavorite = (recipe) => {
    const newFavorites = [...favorites];
    const recipeIndex = favorites.findIndex((fav) => fav.idMeal === recipe.idMeal);
    if (recipeIndex === -1) {
      newFavorites.push(recipe);
    } else {
      newFavorites.splice(recipeIndex, 1);
    }
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    if (searchQuery) {
      searchRecipes(searchQuery);
    }

    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [searchQuery, isDarkMode]);

  return (
    <div className="app-container">
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="dark-mode-btn">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      
      <header>
        <h1 className="heading">Recipe Finder App</h1>
        <p className="subheading">Find, View, and Save Your Favorite Recipes!</p>
      </header>
      
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="recipes-grid">
        {recipes && recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => setSelectedRecipe(recipe)}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
          />
        ))}
      </div>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;
