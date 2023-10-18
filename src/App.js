import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const init = async (engine) => {
    await loadFull(engine);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Particles
        options={{
          particles: {
            color: {
              value: '#fff'
            },
            number: {
              value: 150
            },
            opacity: {
              value: {
                min: 0.3,
                max: 1
              }
            },
            shape: {
              type: 'circle'
            },
            size: {
              value: {
                min: 1,
                max: 5
              }
            },
            move: {
              direction: 'bottom',
              enable: true,
              speed: {
                min: 2,
                max: 4
              },
              straight: false
            }
          }
        }} init={init} />
    </BrowserRouter>
  );
}

export default App;
