import './App.css';
import React from 'react';
import MovieList from './components/MovieList';
import { storage } from './components/Storage';
import 'bootstrap/dist/css/bootstrap.css';

const useState = React.useState

function App() {
  const [movies, setMovies] = useState(storage);

  const addReview = (id, rating, comment) => {
    const movie = movies.find(movie => movie.id === id);
      movie.reviews.push(
        {
          user: `user$(Math.floor(Math.random() * 1000) + 100)`,
          stars: rating,
          comment: comment
        }
      );
    setMovies([...movies, movie]);
  }

  return (
      <>
      <div className='container' />
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-light">Movie Critic</span>
            </div>
        </nav>
      <div>
      <MovieList movies={movies} addReview={addReview} />
      </div>
    </>
  );
}

export default App;