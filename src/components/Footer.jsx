import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer py-3 bg-dark text-light fixed-bottom text-center text font-monospace">
        Developed by <a href="https://mirmohsin.site/">Mir Mohsin</a> &copy;{" "}
        {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Footer;