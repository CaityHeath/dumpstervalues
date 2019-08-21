import React from 'react';

export default (props) => {


  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  }

  console.log(props.icon);

  return (
    <img src={props.icon} className="snake-food" style={style} alt=""/>
  )
}