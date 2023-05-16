
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Gameshop from './components/Gameshop';
import MyGames from './components/MyGames';
/*import MyFavorites from './components/MyFavorites'; */
import './sass/App.scss';
import GamePage from './components/GamePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a href="/" className="App-header-logo">
            GameHub
          </a>
          <nav>
            <ul>
              <li>
                <a href="/gameshop">Gameshop</a>
              </li>
              <li>
                <a href="/mygames">My Games</a>
              </li>
              <li>
                <a href="/favourites">My Favourites</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/gameshop" element={<Gameshop />} />
            <Route path="/mygames" element={<MyGames />} />
            {/*<Route path="/favourites" element={<MyFavorites />} />*/}
            <Route path="/game/:slug" element={<GamePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
  }

  export default App;