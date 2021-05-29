import React from 'react';
import { render } from 'react-dom';
import { Joke } from './components/Joke';
import { jokes } from './jokes';

import './style.css';

const App = () => (
  <div className="container">
    {jokes.map((joke) => (
      <Joke
        userAvatar={joke.avatar}
        userName={joke.name}
        text={joke.text}
        key={joke.id}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
