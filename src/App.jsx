import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Result } from './pages/Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
