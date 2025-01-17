import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Game } from './pages/Game/Game';
import { Result } from './pages/Result/Result';
import { Helmet } from 'react-helmet';
import { GameProvider } from './context/GameProvider.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>띵~호와</title>
        <meta name="description" content="재미있는 마우스 게임 띵호와" />
        <meta name="keywords" content="게임, 철가방, 짜장면, 짬뽕, 띵호와" />
      </Helmet>
      <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </>

    </>
  );
}

export default App;
