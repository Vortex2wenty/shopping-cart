import './App.css';
import HeroImg from './img/hero-image.jpg';

function App() {
  return (
    <div className="App">
      <figure className="hero">
        <div className="hero-img">
          <img alt="" src={HeroImg} />
        </div>
        <div className="hero-caption">
          <figcaption>
            Fulfill your computer needs at Computer Parts!
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default App;
