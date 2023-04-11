import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mynav from './components/Mynav';
import { Hero } from './components/Hero';
import Howfast from './components/Howfast';
import WeHave from './components/WeHave';
import Our from './components/Our';
import { Imagesection } from './components/Imagesection';
import Follow from './components/Follow';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Mynav />
      {/* <Hero /> */}
      <Imagesection />
      <Howfast />
      <WeHave />
      <Our />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
