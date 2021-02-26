import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { Recipe } from "./Recipe";
import { Link } from "react-router-dom";
import "../_styles/App.css";
import axios from "axios";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const apiKey = "a3cc1d73eff648ff955048012275c85a"; // spoonacular

  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&addRecipeInformation=true&number=9`
      );
      console.log(response);
      const data = await response.data;
      console.log(data.results);
      setRecipes(data.results);
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

      {/* login register logout */}
      <div>
        <Link to="./login">
          <Button type="primary" danger>
            Log In
          </Button>
        </Link>
        <Link to="./register">
          <Button type="primary" danger>
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button type="primary" danger>
            Log Out
          </Button>
        </Link>
      </div>

      <br />

      {/* search form */}
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
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}

export { HomePage };
