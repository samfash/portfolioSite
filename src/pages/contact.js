import React, {useEffect} from "react";
import "../assets/Css/Contact.css";
import { useLocation } from 'react-router-dom';
import ContactForm from "../components/contactForm";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <section id="contact-addr" className="contact-section">
        <div className="container">
          <div className="contact-form">
            <div className="form-left row">
              <div className="work-hours col-md-6">
                <h5><strong>Working Hours</strong></h5>
                <p>check below to see the hours we are available</p>
                <p className="day">Monday-Friday</p>
                <p className="time">8am - 5pm</p>
                <p className="day">Saturday</p>
                <p className="time">10am - 3pm</p>
              </div>
              <div className="address col-md-6">
                <h2>Our address</h2>
                <p> Get directions on the map</p>
                <p>18, Ajibulu Street, Mafoluku Oshodi,lagos,Nigeria</p>
                <p>+234 816 064 9644</p>
                <p>samuelfasanya351@gmail.com</p>
              </div>
            </div>
            <div className="form-right">
              <iframe
                className="map"
                title="office_address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.694801252313!2d3.3253447773440605!3d6.560155876500466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e04e8548101%3A0xa732fcf8652288db!2s18%20Ajibulu%20St%2C%20Mafoluku%20Oshodi%2C%20Lagos%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1718308134450!5m2!1sen!2sng"
                width="500"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="contact-section">
        <div className="container">
          <h2>Drop Me a Message</h2>
         <ContactForm/>
        </div>
      </section>
    </div>
  );
};
export default Contact;
