import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";
import Header from "../header/header";
import ParticlesElement from "../particlesElement/particlesElement";
import PortfolioElement from "../portfolio/portfolio";
import ResumeElement from "../resume/resume";
import ContactElement from "../contact/contact";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <>
      <Content
            main={
              <div id="intro">
                <Header />
                  <Lettering
                    className="lettering"
                    title="Hi there!"
                    text={ [
                      "My name is Dani and I'm a web developer based in Melbourne, Australia.",
                      "What motivates me is making things that people love to use, and want to share with others.",
                      "Please take a look at my portfolio, and reach out if you like what you see."
                    ] }
                  />
                      <div className="button">
                        <AwesomeButton
                          className="btn-portfolio"
                          type="secondary"
                          onPress={ () => {
                            fullpage.navigate("/portfolio");
                          }}
                        >
                        My Portfolio
                        </AwesomeButton>
                      </div>
                <ParticlesElement />
              </div>
            }
      />
      </>
  );
});

export const Resume = withNavigationContext(({ fullpage }) => {
  return (
      <Content
        main={
          <ResumeElement/>
        }
      />
  );
});

export const Contact = withNavigationContext(({ fullpage }) => {
  return (
    <ContactElement/>
  );
});

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: (
      <Page>
        <Home />
      </Page>
    )
  },
  {
    slug: "portfolio",
    className: "slide page-two",
    children: (
    <Page className='bgTransparent'>
        <PortfolioElement />
    </Page>
    )
  },
  {
    slug: "resume",
    className: "slide page-three",
    children: (
      <Resume />   
    )
  },
  {
    slug: "contact",
    className: "slide page-two",
    children: (
    <Page>
       <Contact />
    </Page>
    )
  }
];
