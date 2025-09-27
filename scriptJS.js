/*------------------------toggle icon navbar----- ----------*/ 
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}


/*--------------------------scroll section active link---------------------------------*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*-' + id +']').classList.add('active');
            });
        };

    });
    /*---------------------sticky navbar------------------------------*/
    let header=document.querySelector('.header');
    header.classList.toggle('.sticky',window.scrollY>100);

    /*--------------remove toggle icon and navbar--------------------------- */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};
/*-------------------scroll reveal------------------------------------- */
scrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .skills-section, .project-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

/*------------------tyoed js --------------------------------------------------- */
const typed = new Typed('.multiple-text',{
    strings:['Full Stack Developer','Youtuber','Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});
function toggleContent(id) {
    const content = document.getElementById(id);
    const btn = event.target;
    if (content.style.display === "" || content.style.display === "none") {
        content.style.display = "block";
        btn.textContent = "Hide"; 
    } else {
        content.style.display = "none";
        btn.textContent = "View";
    }
};


/*-------------------------------------------------- */
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from refreshing the page

    // get input values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // simple validation
    if (!fullName || !email || !mobile || !subject || !message) {
        alert("⚠️ Please fill in all fields before submitting.");
        return;
    }

    // show collected data (you can replace this with API call or backend connection)
    alert(`✅ Message Sent!\n\nName: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`);

    // clear form
    document.getElementById("contactForm").reset();
});