// To animate the hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));


// EmailjS script
  
 const btn = document.getElementById('button');

 document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

   const serviceID = "service_52lp4ol";
   const templateID = "template_4xth64n";

// send the email here
   emailjs.sendForm(serviceID, templateID, this).then(
     (response) => {
       console.log("SUCCESS!", response.status, response.text);
       alert("SUCCESS!");
     },
     (error) => {
       console.log("FAILED...", error);
       alert("FAILED...", error);
     }
   );
 });    