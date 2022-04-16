import React from "react";

function Footer() {
  return (
    <div className="footerElements">
      <h3>Our Location!</h3>
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12552.61194803353!2d-121.2892272!3d38.1366355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x143c58bf978e319a!2sDragon%20Lite%20Deli!5e0!3m2!1sen!2sus!4v1622945678880!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <footer>Copyright © Philip Lee 2021</footer>
    </div>
  );
}

export default Footer;
