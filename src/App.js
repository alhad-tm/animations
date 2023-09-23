
import './App.css';
import Main from './components/Main/Main';
import Cards from './components/Cards/Cards';
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner'; 
import { motion, useScroll } from 'framer-motion' 
import Car from "./assets/Tesla.png"
import ScrollableComponent from './components/ScrollableComponent/ScrollableComponent';
import CardRotation from './components/CardRotation/CardRotation';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Testimonials from './components/Testimonials/Testimonials';
import Coverflow from './components/Coverflow/Coverflow';
import Shift from './components/Shift/Shift';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import UserProgressBar from './components/UserProgressBar/UserProgressBar';
import UserScrollableProgressBar from './components/UserScrollableProgressBar/UserScrollableProgressBar';
// import ThreeDScene from './components/ThreeDScene/ThreeDScene'; 

// import ModelViewer from './components/ModelViewer'; 

function App() {

  const { scrollYProgress } = useScroll();
  return ( 
    <div className="App">
      <motion.div   className="progress-bar" style={{ scaleX: scrollYProgress }}>  
      <img src={Car}></img>
      </motion.div>
      <Banner/>
      <Navbar/> 
      {/* <Header/>  */}
      <Main/>
      <Cards/>
      {/* <ModelViewer glbPath={glbPath} /> */}
      {/* <ThreeDScene/> */}
  {/* <ScrollableComponent/> */}

  <CardRotation/> 
  <ImageSlider/>
  <Testimonials/>
  <Coverflow/>

  <Shift/>
  <CountdownTimer/>
  <UserProgressBar/>
  <UserScrollableProgressBar/>
    </div>
  );
}

export default App; 
