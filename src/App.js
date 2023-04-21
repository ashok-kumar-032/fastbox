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
import Whatsection from './components/Whatsection';
import Footer from './components/Footer';
import Scroll from './components/Scroll_btn';
import { useEffect, useState } from "react";
import Newnav from './components/Newnav';


function App() {
  // The back-to-top button is hidden at the beginning
  const [showButon, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div>
      <Mynav />
      <Hero />
      <Imagesection />
      <Howfast />
      <WeHave />
      <Our />
       <Whatsection />
      <Follow />
      <Footer />
      <Scroll />
      <button onClick={scrollToTop} className="back-to-top">
        &#8679;
      </button> */
    </div>

  );
}

export default App;
