
import React from 'react';

class UserFavoriteAnimals extends React.Component {
  render() {
    const { favAnimals } = this.props;
    return (
      <div>
        <h3>Favorite Animals:</h3>
        <ul>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;
