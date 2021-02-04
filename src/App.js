import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = "23db6d34";
  const APP_KEY = "39fd7293574795c7536a1aaf5163e85a"; // edamam
  // const APP_KEY = "a3cc1d73eff648ff955048012275c85a"; // spoonacular

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]); // only call API when finish typing query

  // update search while typing
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  // only setQuery when finish typing, setSearch back to empty string for the next search
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <main className="App">
      <h1 className="App-name">WELCOME TO MY RECIPE APP!</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          placeholder="Recipe's Name"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <section className="recipes">
        {recipes.map((recipe) => (
          <Recipe key={recipe.recipe.label} recipe={recipe.recipe} />
        ))}
      </section>
    </main>
  );
};

export default App;
