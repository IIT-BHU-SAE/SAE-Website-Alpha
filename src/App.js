import './App.css';
import Slogo from './images/Group 1.png';
import Gmail from './images/Gmail logo.png';
import G3 from './images/Group 3.png';
import G6 from './images/Group 6.png';
import instaLogo from './images/Instagram logo.png';
import twitterLogo from './images/Twitter logo.png';
import v1 from './images/Vector (1).png';
import v2 from './images/Vector.png';
import w211 from './images/WhatsApp Image 2022-10-07 at 2.11.png';
import w212 from './images/WhatsApp Image 2022-10-07 at 2.12.png';
import w223 from './images/WhatsApp Image 2022-10-07 at 2.23.png';
import w447 from './images/WhatsApp Image 2022-10-07 at 4.47.png';

function App() {
  return (
    <div className="App">
      <div className="first-page">
        <header>
          <nav>
            <ul class="navbar">
              <li className="navbar-items"><img src={Slogo} alt="sae" class="logo" /></li>
              <li className="navbar-items"><a href="">Home</a></li>
              <li className="navbar-items"><a href="">Gallery</a></li>
              <li className="navbar-items"><a href="">Resources</a></li>
              <li className="navbar-items"><a href="">Projects</a></li>
              <li className="navbar-items"><a href="">About Us</a></li>
              <li className="navbar-items"><button class="login">Blog</button></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          <div className="box-1">
            <div className="left">
              <h1>Welcome to SAE Collegiate Club<br /> IIT BHU</h1>
              <h2>Checkout our latest <span>Workshops</span> and <span>Events</span></h2>
              <img src={G6} alt=''></img>
              <div class="first-box">
                <h4><img src={v2} alt='' /><b>WHAT WE DO</b></h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam incidunt cumque ducimus maiores temporibus explicabo.
                <br /><br />
                <a href="">Read More</a>
              </div>
            </div>
            <div className="right">
              <img src={w212} alt='' class="img1" />
              <img src={w447} alt='' class="img2" />
            </div>
          </div>
          <div className="box-2">
            <h2>A community of people in love with cars and everything about them!</h2>
            <div class="second-box"><h4><img src={v1} alt='' /><b>LATEST BLOG</b>
            </h4>Modern vehicles are growing increasingly complex. As well as the electrified powertrain, advanced electronics and networked technologies are becoming.....
              <br /><br />
              <a href="">Read More</a>
            </div>
            <img src={w211} alt='' className="img4" />
            <div className="currents">Currently we are working on various projects, including <br /><br />

              <span>SAE student formula racing car -</span> A racing car is made from scratch for upcoming competitions like Supra SAE and Formula Bharat<br /><br />

              <span>RC car project -</span> Work has been ongoing on RC cars for upcoming iit Bombay Techfest.<br /><br />

              <span>L Roboatics - </span>A project on automatic controlled boats has been ongoing for upcoming iit Bombay Techfest giving well curated content via our blogs. To learn more, visit <a href=""><span>Projects</span></a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
