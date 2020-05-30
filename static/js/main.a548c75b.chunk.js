(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"The Game Of Prompts","github":"https://github.com/nich-o-las/promptsGame","deployed":"https://game-of-prompts.herokuapp.com/","image":"https://res.cloudinary.com/dvqaajrs0/image/upload/v1581803844/croppedPrompts.png","description":"Multiplayer promt-based party game.","tools":"React, Redux, Express, Node, MongoDB"},{"title":"Garaged","github":"https://github.com/EricEnergy/garaged","deployed":"http://garaged-app.herokuapp.com/","image":"https://res.cloudinary.com/dvqaajrs0/image/upload/v1581803847/garageCropped.png","description":"Multi-user, AirBnB-like app for renting garage space.","tools":"Node, Express, JavaScript/JQuery, Handlebars, Bootstrap"},{"title":"ReelStream","github":"https://github.com/nich-o-las/movieSearch","deployed":"https://nich-o-las.github.io/movieSearch/","image":"https://res.cloudinary.com/dvqaajrs0/image/upload/v1581803845/croppedReelStream.png","description":"Allows users to search for a movie and returns the poster, cast, plot, trailer, and other recommendations.","tools":"Javascript/JQuery, MaterializeCSS, YouTube API, OMDB API, TMDB API"},{"title":"Workday Planner","github":"https://github.com/nich-o-las/calendar_project","deployed":"https://nich-o-las.github.io/calendar_project/","image":"https://res.cloudinary.com/dvqaajrs0/image/upload/v1581803844/croppedScheduler.png","description":"Planner app that allows users to schedule their work day hour by hour.","tools":"Javascript/JQuery, MomentJS"}]')},function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(14),l=t.n(o),i=(t(23),t(7)),c=t(5);t(24),t(25);function s(e){return n.a.createElement("nav",{className:"Navbar"},n.a.createElement("div",{className:"Navbar-link-container"},n.a.createElement(i.b,{className:"Navbar-brand Navbar-link",to:"/"},"Nicholas Cox"),n.a.createElement(i.b,{id:"bioLink",className:"Navbar-link"+("Bio"===e.active?" active":""),to:"/"},"Bio"),n.a.createElement(i.b,{className:"Navbar-link"+("Portfolio"===e.active?" active":""),to:"/portfolio"},"Portfolio")))}t(31);function m(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{active:"Bio"}),n.a.createElement("div",{className:"LandingPage"},n.a.createElement("img",{id:"profileImage",alt:"Nicholas Cox",src:"https://res.cloudinary.com/dvqaajrs0/image/upload/v1578069797/bjkz2zsbktlam8gomk6u.jpg"}),n.a.createElement("h2",{id:"LandingPage-aboutMe"},"About Me"),n.a.createElement("p",null,"Full-Stack Web Developer leveraging a background in music and customer service to work in harmony with other developers and create positive user experiences. Earned a Bachelor\u2019s Degree in Web Journalism from the University Of Memphis in 2015, and a certificate in Full Stack Web Development from Vanderbilt University in February of 2020,  specializing in React, NodeJS, Express, and MongoDB. Motivated and always curious, I use a variety of resources to solve problems in innovative and creative ways. My goal in every project is to create seamless, easy-to-use applications that are pleasant for both the users and the other developers involved. I applied my knowledge of NodeJS and Express in a recent project where I worked in a team of four to create an application that pairs people who are listing garages for rent to people who want to use them. Looking forward to applying knowledge in a professional, team environment."),n.a.createElement("div",{className:"LandingPage-links"},n.a.createElement("div",{className:"LandingPage-linkGroup"},n.a.createElement("a",{target:"_blank",href:"mailto:nick.a.cox@gmail.com",rel:"noopener noreferrer"},n.a.createElement("i",{className:"fa fa-envelope LandingPage-clickable"}),n.a.createElement("p",null,n.a.createElement("b",null,"Email: "),"nick.a.cox@gmail.com"))),n.a.createElement("div",{id:"resumeGroup",className:"LandingPage-linkGroup"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://res.cloudinary.com/dvqaajrs0/image/upload/v1581808094/crResume.pdf"},n.a.createElement("i",{className:"fa fa-file LandingPage-clickable"}),n.a.createElement("p",null,"Resume"))),n.a.createElement("div",{className:"LandingPage-linkGroup"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/nich-o-las"},n.a.createElement("i",{className:"fa fa-github LandingPage-clickable"}),n.a.createElement("p",null,"Github Profile"))),n.a.createElement("div",{className:"LandingPage-linkGroup"},n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/nicholas-cox-20bb38b9/"},n.a.createElement("i",{className:"fa fa-linkedin LandingPage-clickable"}),n.a.createElement("p",null,"LinkedIn Profile"))))))}t(32);var p=t(17);t(33);function u(e){var a=e.title,t=e.github,r=e.deployed,o=e.image,l=e.tools,i=e.description;return n.a.createElement("div",{className:"Project"},n.a.createElement("div",{className:"Project-info"},n.a.createElement("h3",null,a),n.a.createElement("div",{className:"Project-links"},n.a.createElement("a",{target:"blank",href:t},n.a.createElement("i",{className:"fa fa-github"}),"Github"),n.a.createElement("a",{target:"blank",href:r},n.a.createElement("i",{className:"fa fa-link"}),"Deployed Application"))),n.a.createElement("img",{alt:a,src:o}),n.a.createElement("div",{className:"Project-tools"},n.a.createElement("p",null,i),n.a.createElement("p",null,n.a.createElement("b",null,"Tools used: "),l)))}function d(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{active:"Portfolio"}),n.a.createElement("p",{className:"Portfolio-descriptor"},"These are just a few of my projects. You can view more on ",n.a.createElement("a",{target:"_blank",href:"https://github.com/nich-o-las"},n.a.createElement("i",{className:"fa fa-github"}),"my Github profile",n.a.createElement("i",{className:"fa fa-github"})),"."),n.a.createElement("div",{className:"Portfolio"},p.map((function(e,a){return n.a.createElement(u,Object.assign({},e,{key:a}))}))))}t(34);function g(){return n.a.createElement("div",{className:"Footer"},n.a.createElement("p",null,n.a.createElement("i",{className:"fa fa-copyright"}),"Nicholas Cox 2020"))}var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i.a,null,n.a.createElement(c.a,{exact:!0,path:"/",component:m}),n.a.createElement(c.a,{exact:!0,path:"/portfolio",component:d})),n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[18,1,2]]]);
//# sourceMappingURL=main.a548c75b.chunk.js.map