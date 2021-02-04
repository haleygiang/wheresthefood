import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Button, Typography, Space } from 'antd';
const { Title, Text } =  Typography;

const Recipe = ({recipe}) => {
    let calories = parseInt(recipe.calories);
    let dietLabels = recipe.dietLabels[0];

    return (
        <Card
            hoverable
            cover={<img alt="recipe" src={recipe.image}/>}
            className='card-container'
            >
            <Title level={3}>{recipe.label}</Title>
            <Space direction="vertical">
                <Text className="card-description">Diet Labels: {dietLabels}</Text>
                <Text className="card-description">Calories: {calories} cal</Text>
                <Button type="primary" className="card-button"><Link to={{pathname:`/recipes/${recipe.label}`,
                state:{recipe}}}>Go to Recipe</Link></Button>
            </Space>
        </Card>
   );
}

export default Recipe;