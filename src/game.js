/* eslint-disable default-case */
import React, { Component } from 'react';
import Snake from './snake.js';
import Food from './food.js';
import dress from './assets/dress.svg';
import coat from './assets/coat.svg';
import cowboy from './assets/cowboy.svg';
import glove from './assets/glove.svg';
import ladyhat from './assets/ladyhat.svg';
import trousers from './assets/trousers.svg';
import sunglasses from './assets/sunglass.svg';
import purse from './assets/purse.svg'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 85;
  let x = Math.floor((Math.random() * (max - min + 1) + min)/2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min)/2) * 2;
  return [x, y];
}



const getImage = () => {
  const images = [dress, cowboy, coat, glove, ladyhat, trousers, sunglasses, purse];
  let max = images.length;
  let pos = Math.floor(Math.random() * max);
  console.log(images[pos]);
  return images[pos];
}

class Game extends Component {

  state = {
    food: getRandomCoordinates(),
    icon: getImage(),
    speed: 250,
    direction: 'RIGHT',  
    snakeDots: [
      [0,0],
      [5,0]
    ]
  }




  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown; 
  }

  onKeyDown = (e) => {
    e = e || window.event;

    switch(e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;

      case 40:
        this.setState({direction: 'DOWN'});
        break;
      
      case 37:
        this.setState({direction: 'LEFT'});
        break;

      case 39:
        this.setState({direction: 'RIGHT'});
        break; 
    }

  }

  componentDidUpdate(){
    this.checkBorders();
    this.checkIfCollapsed();
    this.checkIfEaten();
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch(this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 5, head[1]]
        break;
      case 'LEFT':
        head = [head[0] - 5, head[1]]
        break;
      case 'DOWN':
        head = [head[0], head[1] + 5]
        break;
      case 'UP':
        head = [head[0], head[1] - 5]
        break;
    }
    dots.push(head); 
    dots.shift();
    this.setState({snakeDots: dots});
  }

  checkBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0){
      this.setState(
        { food: getRandomCoordinates(),
          icon: getImage(),
          speed: 200,
          direction: 'RIGHT',  
          snakeDots: [
            [0,0],
            [5,0]
          ]}
      )
    }

  }

  checkIfCollapsed(){
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if(head[0] === dot[0] && head[1] === dot[1]){
        this.setState({
          food: getRandomCoordinates(),
          icon: getImage(),
          speed: 200,
          direction: 'RIGHT',  
          snakeDots: [
            [0,0],
            [5,0]
          ]
        })
      }
    })
  }

  checkRange(head, food){
    if(food + 1 === head ||
       food + 2 === head || 
       food + 3 === head || 
       food + 4 === head ||
       food + 5 === head ||
       food + 6 === head){
      return true;
      }
    return false
    }
  
  checkIfEaten() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;




    if (this.checkRange(head[0], food[0]) && this.checkRange(head[1], food[1])){
      this.setState({food: getRandomCoordinates() });
      this.growSnake();
      this.increaseSpeed();
      this.setState({icon: getImage()});
    }
  }

  growSnake(){
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({ snakeDots: newSnake });
  }

  increaseSpeed(){
    if(this.state.speed > 10){
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  render(){
    console.log('snake dots', this.state.snakeDots);
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/> 
        <Food dot={this.state.food} icon={this.state.icon} />
      </div>
    );
  }
}

export default Game;
