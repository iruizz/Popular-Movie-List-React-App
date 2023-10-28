//import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { MoviesList } from "./movies/MoviesList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MovieDetail} from "./movies/MovieDetail";


function App() {
  return (
    
    <div className="App">
      <Router>
        <Routes>
          {/* Home path to List of Popular Movies */}
          <Route path="/" element={<MoviesList/>}/>
          {/* Path for movie details based on movie id */}
          <Route path="/movie/:id" element={<MovieDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
