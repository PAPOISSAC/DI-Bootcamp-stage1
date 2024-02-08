// Exercise3.js
import React from 'react';
import './Exercise.css'; // Import CSS file

class Exercise3 extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>Header</h1>
        <p className="para">This is a paragraph.</p> {/* Apply CSS class */}
        <button onClick={() => console.log("Button clicked!")}>This is a button</button>
        <form>
          <input type="text" placeholder="Enter something" />
          <button type="submit">Submit</button>
        </form>
        <img src="image-url" alt="Example" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise3;


