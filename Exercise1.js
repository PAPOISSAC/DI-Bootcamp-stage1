
import React from 'react';

function Exercise1() {
  const helloWorldMessage = <p>Hello World!</p>;
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      {helloWorldMessage}
      {myElement}
      <p>React is {sum} times better with JSX</p>
    </div>
  );
}

export default Exercise1;
