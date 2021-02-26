import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Typography, Space } from "antd";
const { Title, Text } = Typography;

const Recipe = ({ recipe }) => {
  let time = recipe.readyInMinutes;
  let healthScore = recipe.healthScore;
  console.log(recipe);

  return (
    <Card
      hoverable
      cover={<img alt="recipe" src={recipe.image} />}
      className="card-container"
      style={{ marginBlock: 20 }}
    >
      <Title level={3}>{recipe.title}</Title>
      <Space direction="vertical">
        <Text className="card-description">Time: {time} minutes</Text>
        <Text className="card-description">Health Score: {healthScore}</Text>
        <Button type="primary" className="card-button">
          <Link
            to={{
              pathname: `/recipes/${recipe.id}`,
              state: { recipe },
            }}
          >
            Go to Recipe
          </Link>
        </Button>
      </Space>
    </Card>
  );
};

export { Recipe };
