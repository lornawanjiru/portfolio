(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,a,t){e.exports=t(47)},26:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(14),r=t.n(c),s=(t(26),t(15)),m=t(16),i=t(20),o=t(19);var u=function(){return l.a.createElement("div",{className:"head"},l.a.createElement("nav",{className:"navbar navbar-expand-lg site-navbar navbar-light bg-light",id:"pb-navbar"},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample09"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-portfolio"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-resume"},"Resume")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#section-contact"},"Contact")))))),l.a.createElement("section",{className:"site-hero",id:"section-home","data-stellar-background-ratio":"0.5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row intro-text align-items-center justify-content-center"},l.a.createElement("div",{className:"col-md-10 text-center pt-5"},l.a.createElement("h1",{className:"site-heading site-animate"},"Hello, I'm ",l.a.createElement("strong",{className:"d-block"},"Lorna Wanjiru")),l.a.createElement("strong",{className:"d-block text-white text-uppercase letter-spacing"},"and I wanted to share my journey with you. "))))))},d=t(2),E=t.n(d),p=t(3),h=t(4),N=function(e){return l.a.createElement("div",{className:"single-portfolio col-sm-4 all web"},l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"thumb"},l.a.createElement("div",{className:"overlay overlay-bg"}),l.a.createElement("img",{className:"image img-fluid",src:e.Image,alt:""})),l.a.createElement("a",{href:"images/p2.jpg",className:"img-pop-up"},l.a.createElement("div",{className:"middle"}))),l.a.createElement("div",{className:"p-inner"},l.a.createElement("h4",null,e.Title),l.a.createElement("div",{className:"cat"},e.Category," ")))},g=t(17),v=t.n(g).a.create({baseURL:"http://localhost:8000/api"}),b=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],c=a[1],r=function(){var e=Object(p.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("portfolio/");case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"section-heading text-center col-md-12"},l.a.createElement("h2",null,"My ",l.a.createElement("strong",null,"Portfolio")))),l.a.createElement("div",{className:"my-portfolio"},l.a.createElement("section",{className:"site-section",id:"section-portfolio"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row "},t.map((function(e){return e?l.a.createElement(N,{Title:e.Title,Category:e.Category,Image:e.Image}):l.a.createElement("div",null,"Loading..")})))))))};var f=function(){return l.a.createElement("div",{className:"resume"},l.a.createElement("section",{className:"site-section ",id:"section-resume"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-5"},l.a.createElement("div",{className:"section-heading text-center"},l.a.createElement("h2",null,"My ",l.a.createElement("strong",null,"Resume")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h2",{className:"mb-5"},"Education"),l.a.createElement("div",{className:"resume-item mb-4"},l.a.createElement("span",{className:"date"},l.a.createElement("span",{className:"icon-calendar"})," May 2018 - Present"),l.a.createElement("h3",null,"Bsc. Computer Science "),l.a.createElement("p",null,"With this Degree I Learnt the foundation of my career."),l.a.createElement("span",{className:"school"},"The Catholic University of Eastern Africa")),l.a.createElement("div",{className:"resume-item mb-4"},l.a.createElement("span",{className:"date"},l.a.createElement("span",{className:"icon-calendar"})," July 2020 "),l.a.createElement("h3",null,"HUAWEI HCIA Routing and Switching"),l.a.createElement("p",null,"I completed my routing and switching certification whereby I passed and got a certificate. I can\u2019t say it was a easy course by it was enough to give knowledge in basic networking hence easing my time as I did my network security course. ")),l.a.createElement("div",{className:"resume-item mb-4"},l.a.createElement("span",{className:"date"},l.a.createElement("span",{className:"icon-calendar"})," August 2020"),l.a.createElement("h3",null,"HUAWEI HCIA Security"),l.a.createElement("p",null,"In this course we went in depth of firewalls and the networking security risks. We were taught how to secure and scan the systems hence trying to avoid the intrusion."))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h2",{className:"mb-5"},"Achievements "),l.a.createElement("div",{className:"resume-item mb-4"},l.a.createElement("span",{className:"date"},l.a.createElement("span",{className:"icon-calendar"})," Jan 2020 - Present"),l.a.createElement("h3",null,"SHEHACKS.Ke LEAD"),l.a.createElement("p",null,"I was chosen as a SheHacks Lead in my school and with that position I was able to help students in my school and encourage them in following their dreams in tech. ")),l.a.createElement("div",{className:"resume-item mb-4"},l.a.createElement("span",{className:"date"},l.a.createElement("span",{className:"icon-calendar"})," Feb 2020 - Present"),l.a.createElement("h3",null,"NETWORKING AND SECURITY ARTICLE"),l.a.createElement("p",null," I love sharing my knowledge and that\u2019s why I write articles. I love how it makes me more proficient also with my field of interest. I have written various articles that are step by step tutorials in doing different things and also blogs about certain things e.g. how network professions use GitHub.")),l.a.createElement("div",{className:"resume-item mb-4"},l.a.createElement("span",{className:"date"},l.a.createElement("span",{className:"icon-calendar"})," August 2020 - Present"),l.a.createElement("h3",null,"SECURITY TRAINER "),l.a.createElement("p",null,"Being a member of the SHEHACKS community I was able to become a trainer in web and network security. I have worked with Cyberranges partnered with SilenSec in one of the webinars where I tackled SQL INJECTION in Depth.")))))))};var w=function(){return l.a.createElement("div",{className:"About"},l.a.createElement("section",{className:"site-section",id:"section-about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mb-5 align-items-center"},l.a.createElement("div",{className:"col-lg-7 pr-lg-5 mb-5 mb-lg-0"},l.a.createElement("img",{src:"assets/images/image_1.jpg",alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"col-lg-5 pl-lg-5"},l.a.createElement("div",{className:"section-heading"},l.a.createElement("h2",null,"About ",l.a.createElement("strong",null,"Me"))),l.a.createElement("p",{className:"lead"},"I am an undergraduate student at the Catholic University of Eastern Africa doing a Bachelor Degree of Computer Science. I am passionate with networking and Cybersecurity and hence I have certified both under HUAWEI. Am a hardworking and a team player hence able to work with people and do my work with less or even no supervision."),l.a.createElement("p",{className:"mb-5  "},"You will realise i haven't mentioned Web design. Well Web design is my technology curiosity mother. It is basically what i learnt first I pictured it as in in-built ability that i was taught but majorly did the teaching. I use my passion in this three topics as my super power. to save anyone who needs it. Contact me incase you need any saving.   "),l.a.createElement("p",null,l.a.createElement("a",{href:"#section-contact",className:"btn btn-primary px-4 py-2 btn-sm smoothscroll"},"Hire Me"),l.a.createElement("a",{href:"#",className:"btn btn-secondary px-4 py-2 btn-sm"},"Download CV")))))))},y=function(e){return l.a.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},l.a.createElement("div",{className:"blog-entry"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:e.Image,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"blog-entry-text"},l.a.createElement("h3",null,l.a.createElement("a",{href:"#"},e.Title)),l.a.createElement("p",{className:"mb-4"},e.Desc),l.a.createElement("div",{className:"meta"},l.a.createElement("a",{href:"#"},l.a.createElement("span",{className:"icon-calendar"})," ",e.Date)))))},I=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],c=a[1],r=function(){var e=Object(p.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("blog/");case 2:a=e.sent,c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-5"},l.a.createElement("div",{className:"section-heading text-center"},l.a.createElement("h2",null,"Blog on ",l.a.createElement("strong",null,"Medium"))))),l.a.createElement("div",{className:"Blog"},l.a.createElement("section",{className:"site-section",id:"section-blog"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row  "},t.map((function(e){return e?l.a.createElement(y,{Title:e.Title,Desc:e.Desc,Date:e.Date,Image:e.Image}):l.a.createElement("div",null,"Loading..")})))))))},x=t(18),k=t.n(x);var C=function(){return l.a.createElement("div",{className:"Contact"},l.a.createElement("section",{className:"site-section",id:"section-contact"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-5"},l.a.createElement("div",{className:"section-heading text-center"},l.a.createElement("h2",null,l.a.createElement("strong",null,"Get In Touch")))),l.a.createElement("div",{className:"col-md-7 mb-5 mb-md-0"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),k.a.sendForm("gmail","template_blyx66q",e.target,"user_BJqoDD4bZ6O0THfFsaHWF").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},method:"POST",className:"site-form"},l.a.createElement("h3",{className:"mb-5"},"Get In Touch"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control px-3 py-4",placeholder:"Your Name",name:"name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control px-3 py-4",placeholder:"Your Email",name:"email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control px-3 py-4",placeholder:"Your Phone",name:"phone"})),l.a.createElement("div",{className:"form-group mb-5"},l.a.createElement("textarea",{className:"form-control px-3 py-4",cols:"30",rows:"10",placeholder:"Write a Message",name:"desc"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-primary  px-4 py-3",value:"Send Message"})))),l.a.createElement("div",{className:"col-md-5 pl-md-5"},l.a.createElement("h3",{className:"mb-5"},"My Contact Details"),l.a.createElement("ul",{className:"site-contact-details"},l.a.createElement("li",null,l.a.createElement("span",{className:"text-uppercase"},"Email"),"lornamuchangi@gmail.com"),l.a.createElement("li",null,l.a.createElement("span",{className:"text-uppercase"},"Phone"),"+245 717426148"),l.a.createElement("li",null,l.a.createElement("span",{className:"text-uppercase"},"Site"),"myportfolio.com"),l.a.createElement("li",null,l.a.createElement("span",{className:"text-uppercase"},"Address"),"Kenya, Nairobi ",l.a.createElement("br",null),"51476 - 00200  ",l.a.createElement("br",null))))))))};var j=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("footer",{className:"site-footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mb-5"},l.a.createElement("p",{className:"col-12 text-center"},"Copyright \xa9 ",l.a.createElement("script",null,"document.write(new Date().getFullYear());")," All rights reserved | This template is made with ",l.a.createElement("i",{className:"icon-heart text-danger","aria-hidden":"true"})," by ",l.a.createElement("a",{href:"#",target:"_blank",className:"text-primary"},"Lorna Wanjiru "))),l.a.createElement("div",{className:"row mb-5"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/lornawanjiru",className:"social-item"},l.a.createElement("span",{className:"icon-github"})),l.a.createElement("a",{href:"https://www.instagram.com/___wan.jiru__/",className:"social-item"},l.a.createElement("span",{className:"icon-instagram2"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/lornawanjirumuchangi/",className:"social-item"},l.a.createElement("span",{className:"icon-linkedin2"}))))))))},A=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"portfolio"},l.a.createElement("body",{"data-spy":"scroll","data-target":"#pb-navbar","data-offset":"200"},l.a.createElement(u,null),l.a.createElement(b,null),l.a.createElement(f,null),l.a.createElement(w,null),l.a.createElement(I,null),l.a.createElement(C,null),l.a.createElement(j,null)))}}]),t}(l.a.Component);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.425ecdd7.chunk.js.map