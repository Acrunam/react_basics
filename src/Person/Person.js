/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Person.css';

const person = (props) => (
  <div className="Person">
    <p>{`I am ${props.name} and I am ${props.age} years old`}</p>
    <p onClick={props.click}>{props.children}</p>
    <input type="text" defaultValue={props.name} onChange={props.changed} />
  </div>
);
export default person;
