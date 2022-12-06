import './App.css';
import BreedCats from './components/Breedcats';
import Featurette from './components/Featurette';
import Navbar from './components/Navbar';
import RandomCats from './components/RandomCats';

function App() {
  return (
    <div className="App container">
      <Navbar/>
      <Featurette/>
      <RandomCats/>
      <BreedCats/>
    </div>
  );
}

export default App;
