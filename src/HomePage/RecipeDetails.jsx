import React from "react";
import "../_styles/App.css";

import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Row, Col, Typography } from "antd";
import {
  ClockCircleOutlined,
  HeartOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

function RecipeDetails() {
  let location = useLocation();
  let recipe = location.state.recipe;
  // console.log(recipe);

  const cookTime = recipe.readyInMinutes;
  const dishList = recipe.dishTypes;
  const dishTypes = dishList.map((dish, index) => (
    <Text>
      {capitalizeFirstLetter(dish)}
      {index !== dishList.length - 1 ? ", " : "."}
    </Text>
  ));

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const summary = `${recipe.summary}`;

  const instructions = recipe.analyzedInstructions[0].steps;
  // console.log(instructions);

  const ingres = [];
  const steps = [];

  instructions.forEach((element) => {
    const ingredients = element.ingredients;
    ingredients.forEach((ingredient) => ingres.push(ingredient.name));
    steps.push(element.step);
  });

  const recipeSteps = steps.map((step, index) => (
    <Text>
      {index + 1}. {step} <br />
    </Text>
  ));

  const recipeIngres = ingres.map((ingre, index) => (
    <Text>
      {capitalizeFirstLetter(ingre)} <br />
    </Text>
  ));
  console.log(recipeSteps);
  console.log(recipeIngres);

  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="HomePage">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="LogOut">
            <Link to="/login">Log Out</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: "30px" }}>
        <main className="Recipe-Details">
          <Row className="row-container">
            <Col md={12} className="col-container">
              <img src={recipe.image} alt="recipe" className="thumbnail-img" />
            </Col>
            <Col md={12}>
              <Title style={{ paddingTop: 10 }}>{recipe.title}</Title>
              <Title level={5}>
                By <Link to={recipe.sourceUrl}>{recipe.sourceName}</Link>
              </Title>
              <Title level={5}>{recipe.aggregateLikes} Likes</Title>
              <Title level={5}>Dish Types: {dishTypes}</Title>
            </Col>
          </Row>

          <Row style={{ paddingTop: "30px" }} className="row-container">
            <Col md={8} className="col-container">
              <ClockCircleOutlined className="header-icon" />
              <Text style={{ fontSize: "15px" }}>
                Cook Time: {cookTime} mins
              </Text>
            </Col>
            <Col md={8} className="col-container">
              <HeartOutlined className="header-icon" />
              <Text style={{ fontSize: "15px" }}>
                Health Score: {recipe.healthScore}
              </Text>
            </Col>
            <Col md={8} className="col-container">
              <SmileOutlined className="header-icon" />
              <Text style={{ fontSize: "15px" }}>
                Serves: {recipe.servings}
              </Text>
            </Col>
          </Row>
          <br />
          <Row className="row-container">
            <Title level={4}>Summary</Title>
            {
              <div
                style={{ fontSize: "17px", textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: summary,
                }}
              />
            }
          </Row>
          <br />
          <Row className="row-container">
            <Title level={4}>Method</Title>
            <div style={{ fontSize: "17px", textAlign: "justify" }}>
              {recipeSteps}
            </div>
          </Row>

          <br />
          <Row className="row-container">
            <Col md={4}>
              <Title level={4}>Ingredients</Title>
            </Col>
            <Col md={12} className="col-container">
              <div style={{ fontSize: "17px", textAlign: "justify" }}>
                {recipeIngres}
              </div>
            </Col>
          </Row>
        </main>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Recipe App ©2021 Created by Haley Giang
      </Footer>
    </Layout>
  );
}

export { RecipeDetails };
