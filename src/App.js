import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mynav from './components/Mynav';
import { Hero } from './components/Hero';
import Howfast from './components/Howfast';
import Our from './components/Our';


function App() {
  return (
    <div>
      <Mynav />
      <Hero />
      <Howfast />
      <Our />
    </div>
  );
}

export default App;
