import React from 'react';
import './App.css'; // Make sure to have your CSS file in the same directory as your JSX file

function AnimeWebsite() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anime Website</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <div className="container">
          <header>
            <h1 className="title">From Laughter to Tears: List of ANIME to watch</h1>
            <div className="top-bar">
              <a href="#" className="login-signup-btn">Login</a>
              <a href="#" className="login-signup-btn">Signup</a>
            </div>
          </header>
          <div className="content">
            <div className="description">
              <p>The word anime is a shortened form of the Japanese word animēshon, which means animation. While anime has its roots in Japan, it has since spread to other countries, and today, anime can be found in many different languages, including English.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AnimeWebsite;
