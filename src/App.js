import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mynav from './components/Mynav';
import { Hero } from './components/Hero';
import Howfast from './components/Howfast';
import Our from './components/Our';
import { Imagesection } from './components/Imagesection';
import { Calculate } from './components/Calculate';


function App() {
  return (
    <div>
      <Mynav />
      {/* <Hero /> */}
      <Imagesection />
      <Howfast />
      <Our />
      <Calculate />
    </div>
  );
}

export default App;
