import React from "react";
import SpaceSnake from '../images/SpaceSnake.png';
import Recipe from '../images/Recipe.png';
import './Project.css';

function Project() {

    return(
        <div id="body">
            <h1>Projects</h1>
                <h3>Project 1</h3>
                <img src={SpaceSnake} alt="" />
                <p>Space Snake Game</p>
                <a href="https://github.com/amanda-w/Space-Snake">Github</a>
                <h3>Project 2</h3>
                <img src={Recipe} alt="" />
                <p>Recipe Search</p>
                <a href="https://github.com/amanda-w/Recipes">Github</a>
        </div>
    )
}

export default Project;