import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>
      <div className="layo">
        <div className="centere">
          <h1><center>THANK YOU FOR CONTACTING US</center></h1>
          <br/><br/>
          <p>Welcome to our birthday event planning services! We are dedicated to making your special day truly unforgettable. Whether it's a milestone birthday, a surprise party, or a themed celebration, we've got you covered. Our team of experienced event planners is here to bring your vision to life. From choosing the perfect venue to crafting personalized decorations, organizing entertainment, and curating a mouthwatering menu, we handle every detail with precision and creativity. Let us take the stress out of planning so you can focus on enjoying the moment with your loved ones. Contact us today, and together, we'll create memories that will last a lifetime.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h4>Contact Us</h4>
            <p>Email: contactbr@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main Street, Coimbatore, India</p>
          </div>
          
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
