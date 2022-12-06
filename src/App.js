import './App.css';
import BreedCats from './components/Breedcats';
import Featurette from './components/Featurette';
import Navbar from './components/Navbar';
import RandomCats from './components/RandomCats';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route path='/' element={
            <div>
              <Navbar />
              <Featurette />
              <RandomCats />
              <BreedCats />
              <Footer/>
            </div>
          }></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
