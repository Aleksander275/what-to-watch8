import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const SettingMovie = {
  movieCount: 20,
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      year={SettingMovie.year} genre={SettingMovie.genre} movieCount={SettingMovie.movieCount} title={SettingMovie.title}
    />
  </React.StrictMode>,
  document.getElementById('root'));
