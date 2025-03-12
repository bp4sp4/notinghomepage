"use client";

import "./footer.css";
import { ImGithub } from "react-icons/im";
import { FaBloggerB } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer__wrap h-screen">
      <p>Did you have an interactive experience?</p>
      <p>bp4sp4@naver.com</p>
      <div>
        <h1 className="footer__title">InteractUI,</h1>
      </div>
      <div className="footer__link">
        <a href="https://frontdevpark.tistory.com/" target="_blank">
          <FaBloggerB /> &nbsp; : Dev Blog
        </a>

        <a href="https://github.com/bp4sp4/" target="_blank">
          <ImGithub /> &nbsp; : GitHub
        </a>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2025 SangHunPark. All Rights Reserved.</p>
        <p className="subtitle">coded by : PSH</p>
      </div>
    </footer>
  );
}
