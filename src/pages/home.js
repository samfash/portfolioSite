import frontImg from "../assets/images/laptop_wave.png";
import "../assets/Css/home.css"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <section id="portF" className="homePage-section">
        <div className="container">
          <div className="row front">
            <div className="col-lg-6 col-md-6 front-left">
              <p className="moveUp">Hello there, <span className="intro"> I am a</span></p>
              <div className="role">
              <p>Full-Stack Developer</p>
              <p>Data Scientist</p>
              </div>
              <span className="moveDown"> I build websites, web apps and Ai-models.</span>
              <span className="moveDown">Currently focused on seamless integration with any AI.</span>
              <div className="cta">
              <button
                className="btn btn-warning whatsappBut"
                type="button"
              >
              <a href="https://wa.me/2348160649644" target="_blank" rel="noopener noreferrer">Let's Chat on WhatsApp <WhatsAppIcon></WhatsAppIcon></a>
              </button>
              <button
              type="button"
                className="btn btn-outline-dark"
              >
              <Link to={"/who-i-am"}>view profile <ArrowCircleRightIcon/></Link>
              </button>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <img src={frontImg} className="img-fluid" alt="front_image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
