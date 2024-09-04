import React from "react";
import logo from "../photo/logo.png";
import RockBackground from "../photo/Footer/rock_background-removebg-preview.png";

function Footer() {
  return (
    <div className="bg-rock_backgroumd bg-cover bg-no-repeat border-t-2">
      <div className="bg-[rgba(0,0,0,0.6)] text-white text-xl font-worksans">
        <footer
          className="footer p-10 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <aside>
            <img className="w-[120px]" src={logo} alt="" />
            <p>
              Magadh Nirman
              <br />
              Discover The Art of Surface
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
