/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Jawher Kallel/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/jawher_kallel/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/JawherKl" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://x.com/kallel_jawher" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/jawher-kallel" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://github.com/jawherr" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; 2025 JK. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer