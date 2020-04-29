import React, { useState } from "react";
import nv from "../../imgs/nv.png";
import sw from "../../imgs/sw.png";
import "./Footer.scss";

const Footer = () => {
  let [lng, setLng] = useState(false);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="social">
            <a className="social__link" 
               href="https://www.instagram.com/foxbuka/?hl=en"  
               target="__blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="social__link" 
               href="https://www.facebook.com/profile.php?id=100010356462751" 
               target="__blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="country">
            <p>Countries</p>
            <img className="country__flag" src={sw} alt="sw"/>
            <img className="country__flag" src={nv} alt="nv" />
          </div>
          <div className="language">
            <p>Language</p>
            <button className={lng===false ? "language__type active" : "language__type"}
                    onClick={() => setLng(!lng)}>no</button>
            <button className={ lng===true ? "language__type active" : "language__type"}
                    onClick={() => setLng(!lng)}>en</button>
          </div>
        </div>
        <div className="footer__content">
          <h4 className="title m-bold">Customer serviece</h4>
          <ul className="list">
            <li className="list__item">
              <a href="/#">FAQ</a>
            </li>
            <li className="list__item">
              <a href="/#">Terms of use</a>
            </li>
            <li className="list__item">
              <a href="/#">Privacy policy</a>
            </li>
            <li className="list__item">
              <a href="/#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="title m-bold">Information</h4>
          <ul className="list">
            <li className="list__item">
              <a href="/#">How it works</a>
            </li>
            <li className="list__item">
              <a href="/#">About Cake it easy</a>
            </li>
            <li className="list__item">
              <a href="/#">For companies</a>
            </li>
            <li className="list__item">
              <a href="/#">Send cakes to multiple locations</a>
            </li>
            <li className="list__item">
              <a href="/#">Cake calendar</a>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h4 className="title m-bold">Inspiration</h4>
          <ul className="list">
            <li className="list__item">
              <a href="/#">Birthday cake</a>
            </li>
            <li className="list__item">
              <a href="/#">Cake width image or logo</a>
            </li>
            <li className="list__item">
              <a href="/#">Confirmation cake</a>
            </li>
            <li className="list__item">
              <a href="/#">Baptism cake</a>
            </li>
            <li className="list__item">
              <a href="/#">Glutenfree cake</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
