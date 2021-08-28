---
title: "Mission Control for Product Management"
projectName: "Skyjed"
description:
    [
        "Skyjed’s AI-powered end-to-end product platform brings together every data point across the entire product portfolio 
        and lifecycle into a single source of product truth. It gives product teams a new perspective on their portfolio and 
        a shortcut to discovering their best next move.",

        "Skyjed is a React-based web app that is used by companies to manage product lifecycles, as well as completing their 
        reporting and compliance obligations. The application was originally built on the ExtJS framework, and I have contributed to 
        the work to modernise, by recreating ExtJS components to React, as well as updating older components from class-based 
        to function-based in order to make use of the efficiencies that hooks provide.",
        
        "Another of my tasks was to implement automated testing using Cypress.io. I ensured that all core functionality was 
        covered by the test cases so that developer could be sure that their changes have not affected the main features 
        of the application. Due to the way that ExtReact renders components, it taught me a lot as I often had to create 
        overrides for some elements as by default they do not render suitable aria-labels or roles, which can make accessability 
        impossible, as well as causing tests to be brittle.",

        "Prior to my time at the company, deployments were done manually and were often quite time consuming. Having previous 
        experience with GitHub actions and CI/CD practices, I set up automated workflows for several of the different environments."
    ]

slug: skyjed
technologiesUsed: ["React", "Ext JS", "D3.js", "Redux", "React Router", "Cypress.io", "Storybook", "PostCSS", "AWS", "GitHub Actions"]
liveSite: "https://www.skyjed.com/"
---