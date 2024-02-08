// App.js
import React from 'react';
import Exercise1 from './Exercise1';
import UserFavoriteAnimals from './userFavouriteAnimals';
import Exercise3 from './Exercise3';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };

  return (
    <div>
      {/* Exercise 1 */}
      <h2>Exercise 1: With JSX</h2>
      <Exercise1 />

      {/* Exercise 2 */}
      <h2>Exercise 2: Object</h2>
      <div>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </div>

      {/* Exercise 3 */}
      <h2>Exercise 3: HTML Tags In React</h2>
      <Exercise3 />
    </div>
  );
}

export default App;

