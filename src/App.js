
import './App.css';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'; 
import { motion, useScroll } from 'framer-motion' 
import Car from "./assets/logo.svg"
import ScrollableComponent from './components/ScrollableComponent/ScrollableComponent';
// import ThreeDScene from './components/ThreeDScene/ThreeDScene'; 

// import ModelViewer from './components/ModelViewer'; 

function App() {

  const { scrollYProgress } = useScroll();
  return ( 
    <div className="App">
      <motion.div   className="progress-bar" style={{ scaleX: scrollYProgress }}>  
      <img src={Car} alt=''/>
      
      </motion.div>
      <Banner/>
      <Navbar/> 
      <Header/> 
      <Main/>
      <Cards/>
      {/* <ModelViewer glbPath={glbPath} /> */}
      {/* <ThreeDScene/> */}
  <ScrollableComponent/>
    </div>
  );
}

export default App; 
