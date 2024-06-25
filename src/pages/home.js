import frontImg from "../assets/images/laptop_wave.png";
import "../assets/Css/home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <section id="portF" className="homePage-section">
        <div className="container">
          <div className="row front">
            <div className="col-lg-6 front-left">
              <p>Hello there, I am a</p>
              <div className="role">
              <p>Full-Stack Developer</p>
              <p>Data Scientist</p>
              </div>
              <p> I build websites, web apps and Ai-models.</p>
              <p>Currently focused on seamless integration with any AI.</p>
              <div className="cta">
              <button
                className="btn btn-warning"
                type="button"
              >
              <Link to='/contact-me#contact-form'>Let's Chat</Link>
              </button>
              <button
              type="button"
                className="btn btn-outline-secondary"
              >
              <Link to={"/who-i-am"}>view profile</Link>
              </button>
              </div>
            </div>
            <div class="col-lg-6">
              <img src={frontImg} className="img-fluid" alt="front_image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
