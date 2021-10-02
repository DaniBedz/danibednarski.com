---
projectName: "myob Sales Tracker"
title: "A professional sales tool for tracking client information, quotes and sales."
description:
    [
        "I built this project to allow my wife to track her quotes and sales easier. She was using OneNote to do this previously and would found that 
        it was hard to track quotes, utilisations, sales, as well as all the different associated details, as the company does not have a specific tool for 
        sales agents themselves.",
        
        "Working as part of a call-center, you often do not get much time between calls for admin, so it was important that an entry could be made with 
        minimal information, and could be filled out later with more specifics, so I added a single Add new sale field in the top corner for the company name.",

        "There are several sale types, which are calculated using business logic based on the data entered.",

        "Items can by re-ordered by clicking and dragging, and values can be incremented using the toggles. The text notes field resizes based on the user focus. 
        There is also an 'Archive' section where items can be stored if they are no longer needed, but might be useful to keep and refer back to in future.",
        
        "Although I implemented Google Authentication via Firebase, I chose not to store any client information on my server, and records are instead saved in 
        localStorage as this is not an official myob solution."
    ]

slug: "salestracker"
technologiesUsed: [
    {
        name: "Vite",
        url: "https://vitejs.dev/",
    },
    {
        name: "React",
        url: "https://reactjs.org/",
    },
    {
        name: "Firebase",
        url: "https://firebase.google.com/",
    },
    {
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
    },
    {
        name: "Raviger",
        url: "https://kyeotic.github.io/raviger/",
    },
    {
        name: "Flatpickr",
        url: "https://flatpickr.js.org/",
    },
    {
        name: "Alertify.js",
        url: "https://alertifyjs.com/",
    },
    {
        name: "Vultr (VPS)",
        url: "https://www.vultr.com/",
    },
    {
        name: "Caddy",
        url: "https://caddyserver.com/",
    },
]
github: "https://github.com/DaniBedz/myob-sales-tracker"
liveSite: "https://myob.danibednarski.com"
---