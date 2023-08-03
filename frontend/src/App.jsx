import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import BgImage from './assets/Rectangle 9398.png'
import Home from './Pages/Home';

function App() {
  return (
    <Box className="App" bgImage={BgImage} >
      <Home/>
      <Footer/>
    </Box>
  );
}

export default App;
