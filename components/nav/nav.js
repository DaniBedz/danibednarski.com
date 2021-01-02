import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";
import { AwesomeButton } from "react-awesome-button";
import Avatar from "../avatar/avatar";
import "./nav.scss";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;
  

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className="page-header__title">
          <Avatar/>
          <div>
            <h1>
              <span>Dani</span>
              <span>Bednarski</span>
            </h1>
            <h2>Web Developer</h2>
          </div>
        </div>
        <nav>
          <Link className={slug === "" ? "selected" : null} href="/">
            <AwesomeButton
              type="secondary"
              className='nav'>
              Home
            </AwesomeButton>
          </Link>
          <Link
            className={slug === "portfolio" ? "selected" : null}
            href="/portfolio"
          >
             <AwesomeButton
              type="secondary"
            className='nav'>
            Portfolio
            </AwesomeButton>
          </Link>
          <Link
            className={slug === "resume" ? "selected" : null}
            href="/resume"
          >
             <AwesomeButton
              type="secondary"
            className='nav'>
            Resume
            </AwesomeButton>
          </Link>
          <Link
            className={slug === "contact" ? "selected" : null}
            href="/contact"
          >
             <AwesomeButton
              type="secondary"
            className='nav'>
            Contact
            </AwesomeButton>
          </Link>
        </nav>
      </div>
    </header>
  );
});

export default Nav;
