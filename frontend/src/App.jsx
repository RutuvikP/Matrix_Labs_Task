import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import BgImage from './assets/Rectangle 9398.png'

function App() {
  return (
    <Box className="App" bgImage={BgImage}>
      <Sidebar/>
      <Footer/>
    </Box>
  );
}

export default App;
