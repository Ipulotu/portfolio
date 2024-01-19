const projects: Array<object> = [
    {
        "id":"0",
        "name":"BeaumontWard.ca",
        "imagePath1":"assets/images/login-Phone1.webp",
        "imagePath2":"assets/images/home-events.webp",
        "imagePath3":"assets/images/BWP4.webp",
        "imagePath4":"assets/images/Edit-announcement.webp",
        "imagePath5":"assets/images/dashboard.webp",
        "summary":"This site helps the members of locale church stay connected and up to date on events and activities. Designed & built entire back end using ASP.NET, Entity Framework, .NET Core.  Build an API that uses FTP to interface with a live server file management system.  Built & managed Angular front end.",
        "descriptions":"",
        "tech":[ "C#", "Typescript", "Angular", "Bootstrap", "ASP.NET", "FTP", "Swagger", "GoDaddy", "GitHub", "Trello"],
        "gitUrl":"",
        "liveUrl":"https://beaumontward.ca/"
    },
    {
        "id":"1",
        "name":"Damage Cage App",
        "imagePath1":"assets/images/damage-cage-app.webp",
        "imagePath2":"",
        "imagePath3":"",
        "summary":"Developed a single page application with villain JS to assist in monitoring associates that is used across the warehouse. Said app was a single HTML file that was downloaded and shared with management to keep track of each associate’s work, and to allow better equality among them. ",
        "descriptions":"",
        "tech":["JavaScript", "CSS", "HTML", "GitHub"],
        "gitUrl":"https://github.com/Ipulotu/Damage_Cage_App",
        "liveUrl":"https://ipulotu.github.io/Damage_Cage_App/DamageCages.html"
    },
    {
        "id":"2",
        "name":"D&D Spellbook",
        "imagePath1":"assets/images/D&D.webp",
        "imagePath2":"assets/images/D&D2.JPG",
        "imagePath3":"assets/images/D&D3.JPG",
        "summary":"A single page web application built with vanilla JavaScript connected to a D&D API. This application allows users create list of spells(spellbooks) which will be recorded to local storage. The D&D API provides the name of the spells as well as information about how the spell works.",
        "descriptions":"",
        "tech":["JavaScript", "CSS", "D&D API", "GitHub", "Single-page application"],
        "gitUrl":"https://github.com/Ipulotu/wdd330/tree/main/challage/D%26D",
        "liveUrl":"https://ipulotu.github.io/wdd330/challage/D&D/index.html"
    },

    {
        "id":"3",
        "name":"CookBook API",
        "imagePath1":"assets/images/cook-book.webp",
        "imagePath2":"assets/images/Mongodb2.JPG",
        "imagePath3":"assets/images/Mongodb3.png",
        "summary":"A REST API built with Node & Express. It is documented with swagger, and is connected to a MongoDB Atlas. The API requires authorization by users who have google accounts. This is done with OAuth2 and is set up on Google Cloud Platform.",
        "descriptions":"",
        "tech":["JavaScript", "Mongodb", "Google OAuth", "Swagger", "Passport framwork", "GitHub"],
        "gitUrl":"https://github.com/Ipulotu/CES341/tree/main/CookBook-API",
        "liveUrl":"https://ipulotu-cookbook.onrender.com"
    },
    {
        "id":"4",
        "name":"Python games",
        "imagePath1":"assets/images/dig.webp",
        "imagePath2":"assets/images/GREED.JPG",
        "imagePath3":"assets/images/cycle.JPG",
        "summary":"4 retro games that my team mates and I coded in python for our class \"Programming with classes.\" We have Cycle, Dig dug and more.",
        "descriptions":"",
        "tech":["Python", "Raylib", "Pytest", "GitHub"],
        "gitUrl":"https://github.com/Ipulotu/python",
        "liveUrl":""
    },
    {
        "id":"5",
        "name":"Beaumont Chamber",
        "imagePath1":"assets/images/commerce.webp",
        "imagePath2":"assets/images/COC2.JPG",
        "imagePath3":"assets/images/COC3.JPG",
        "summary":"This mock site was designed for my frontend web development class. It is connected to a weather API & generates random business cards each time the page is loaded. The sites is dynamic and can accommodated phones, tablets, and desktop views.",
        "descriptions":"",
        "tech":["JavaScript", "CSS", "Weather API", "Lazy loading", "GitHub"],
        "gitUrl":"https://github.com/Ipulotu/wdd230/tree/main/lesson9/chamber",
        "liveUrl":"https://ipulotu.github.io/wdd230/lesson11/chamber/index.html"
    },
    {
        "id":"6",
        "name":"web game collection",
        "imagePath1":"assets/images/damage-cage-app.webp",
        "imagePath2":"",
        "imagePath3":"",
        "summary":" Dig dug and more.",
        "descriptions":"",
        "tech":["JavaScript", "CSS", "HTML"],
        "gitUrl":"https://github.com/Ipulotu/web-games",
        "liveUrl":"https://ipulotu.github.io/web-games/index.html"
    }
]

export function projectsList() {
    return projects;
}