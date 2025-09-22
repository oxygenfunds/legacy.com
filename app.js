'use strict';
function sendmail (){
    let parms = {
        name: document.getElementById("FirstName").value,
        text:document.getElementById("text").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("Phone Number").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("textarea").value
    }
    emailjs.send("service_mf6ek3e","template_mbfjsso", parms).then(alert("Email sent successfully"));
}
const form = document.getElementById('form');
const name = document.getElementById('FirstName');
const text = document.getElementById('text');
const email = document.getElementById('Email');
const phone = document.getElementById('phone Number');
const subject = document.getElementById('subject');
const message = document.getElementById('textarea');

form.addEventListener('submit', e => {
    e.preventDefault();
    validate();
});
const setErrorMsg = (element, errormsgs) => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');
    errorDisplay.innerText = errormsgs;
    inputbox.classList.add('error');
    inputbox.classList.remove('success');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validate = () => {
    const nameVal = name.value.trim();
    const textVal = text.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const subjectVal = subject.value.trim();
    const messageVal = message.value.trim();
   
    if(nameVal === ""){
        setErrorMsg(name, 'First Name cannot be blank');
    }
    else{
        setErrorMsg(name);
    }

    if(textVal === ""){
        setErrorMsg(text, 'Last Name is required');
    }
    else{
        setErrorMsg(text);
    }
    if(emailVal !== "" && !isValidEmail(emailVal)){
        setErrorMsg(email, 'Provide a valid email address');
    }
    if (emailVal === ""){
        setErrorMsg(email, 'Email is required');

    }
    else{
        setErrorMsg(email);
    }
    confirm ('submission was  successful');
}



// confirm('submit')

//   document.addEventListener('DOMContentLoaded', function() {
//     // 1) SMOOTH SCROLL for all internal links:
//     document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
//       anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         let target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//           target.scrollIntoView({ behavior: 'smooth' });
//         }
//       });
//     });

//     // 2) SCROLL-SPY: highlight navbar link for the section in view
//     const sections = document.querySelectorAll('section, .about, .home');
//     const navLinks = document.querySelectorAll('.navbar a');
//     function onScroll() {
//       let scrollPos = window.scrollY + window.innerHeight/3;
//       sections.forEach(sec => {
//         if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
//           let id = sec.id || sec.classList[0];
//           navLinks.forEach(a => {
//             a.classList.toggle('active', a.getAttribute('href') === '#' + id);
//           });
//         }
//       });
//     }
//     window.addEventListener('scroll', onScroll);
//     onScroll(); // init

//     // 3) (Optional) MOBILE MENU TOGGLE if you add a button#menu-toggle
//     const menuToggle = document.getElementById('menu-toggle');
//     const navbar    = document.querySelector('.navbar');
//     if (menuToggle && navbar) {
//       menuToggle.addEventListener('click', () => {
//         navbar.classList.toggle('open');
//       });
//     }

//     // 4) AUTO-UPDATE footer year
//     const copyright = document.querySelector('.footer .copyright');
//     if (copyright) {
//       let year = new Date().getFullYear();
//       copyright.textContent = year + ' OXYGEN' + 
//         (copyright.textContent.match(/FUNDS/) ? ' FUNDS' : '') +
//         ' | All Rights Reserved';
//     }
//   });

