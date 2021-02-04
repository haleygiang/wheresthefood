import React from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { Descriptions, Typography, List } from "antd";
const { Title } = Typography;

function RecipeDetails() {
  let location = useLocation();
  let recipe = location.state.recipe;
  console.log(recipe);

  const calories = Math.floor(recipe.calories);
  const dietLabels = recipe.dietLabels;
  const healthLabels = recipe.healthLabels;
  const cautions = recipe.cautions;
  const ingredients = recipe.ingredientLines;
  const source = recipe.source;

  return (
    <main className="Recipe-Details">
      <Title level={3} style={{ paddingTop: 10 }}>
        {recipe.label}
      </Title>
      <img src={recipe.image} alt="recipe" />
      <Descriptions
        title="Recipe Details"
        layout="vertical"
        bordered
        column={4}
        style={{ padding: 30 }}
        labelStyle={{ fontWeight: "bold" }}
      >
        <Descriptions.Item label="Calories" className="label">
          {calories} cal
        </Descriptions.Item>
        <Descriptions.Item label="Diet Labels" className="label">
          {dietLabels}
        </Descriptions.Item>
        <Descriptions.Item label="Cautions" className="label">
          {cautions}
        </Descriptions.Item>
        <Descriptions.Item label="Source" className="label">
          {source}
        </Descriptions.Item>
        <Descriptions.Item label="Health Labels" span={2} className="label">
          <List
            dataSource={healthLabels}
            itemLayout="vertical"
            renderItem={(label) => <List.Item>{label}</List.Item>}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Ingredients" span={2} className="label">
          <List
            dataSource={ingredients}
            itemLayout="vertical"
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Descriptions.Item>
      </Descriptions>
    </main>
  );
}

export default RecipeDetails;
