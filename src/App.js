import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Explicit from './pages/Explicit';
import Home from './pages/Home';
import Political from './pages/Political';
import Religion from './pages/Religion';

function App() {
  const [loading, setLoading] = useState(false);

  const fetchJokes = (category, callback) => {
    setLoading(true);
    for (let i = 0; i < 5; i++) {
      fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((res) => res.json())
        .then((data) => {
          callback(data);
          setLoading(false);
        });
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/political"
          element={
            <Political
              category="political"
              fetchJokes={fetchJokes}
              loading={loading}
            />
          }
        />
        <Route
          path="/explicit"
          element={
            <Explicit
              category="explicit"
              fetchJokes={fetchJokes}
              loading={loading}
            />
          }
        />
        <Route
          path="/religion"
          element={
            <Religion
              category="religion"
              fetchJokes={fetchJokes}
              loading={loading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
