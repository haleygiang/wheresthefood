import React, { useEffect, useState } from "react";
import { Recipe } from "./Recipe";
import { Link } from "react-router-dom";
import { recipeActions } from "../_actions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

import "antd/dist/antd.css";
import "../_styles/App.css";

function HomePage() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // dispatch to get recipes by calling API in actions
  useEffect(() => {
    dispatch(recipeActions.getRecipe(query));
  }, [query]); // only call API when finish typing query
  const recipes = useSelector((state) => state.recipe.data);

  // update search while typing
  const updateSearch = (e) => {
    setSearch(e.target.value);
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
