import React from "react";
import "../_styles/App.css";

import { Link, useLocation } from "react-router-dom";
import { Descriptions, Typography, List } from "antd";
import { Layout, Menu, Row, Col } from "antd";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

function RecipeDetails() {
  let location = useLocation();
  let recipe = location.state.recipe;
  console.log(recipe);

  const summary = recipe.summary;
  const dietLabels = recipe.diets;
  const servings = recipe.servings;
  const dishTypes = recipe.dishTypes;
  const ingredients = recipe.analyzedIntructions;
  const source = recipe.sourceUrl;

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
          <Row>
            <Col span={12}>
              <img src={recipe.image} alt="recipe" className="thumbnail-img" />
            </Col>
            <Col span={12}>
              <Title level={3} style={{ paddingTop: 10 }}>
                {recipe.title}
              </Title>
              <Text>Hello</Text>
            </Col>
          </Row>
          <Descriptions
            title="Recipe Details"
            layout="vertical"
            bordered
            // column={3}
            style={{ padding: 30 }}
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            labelStyle={{ fontWeight: "bold" }}
          >
            <Descriptions.Item label="Summary" className="label">
              {summary}
            </Descriptions.Item>
            <Descriptions.Item label="Diet Labels" className="label">
              {dietLabels}
            </Descriptions.Item>
            <Descriptions.Item label="Servings" className="label">
              {servings}
            </Descriptions.Item>
            <Descriptions.Item label="Source" className="label">
              {source}
            </Descriptions.Item>
            <Descriptions.Item label="Dish Types" className="label">
              <List
                dataSource={dishTypes}
                itemLayout="vertical"
                renderItem={(type) => <List.Item>{type}</List.Item>}
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
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Recipe App ©2021 Created by Haley Giang
      </Footer>
    </Layout>
  );
}

export { RecipeDetails };
