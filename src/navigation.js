const navSlide = () => {
    const burger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");
    //const navLinks = document.querySelectorAll('.nav-links li');
      
    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');

        //Hamburger animation
        burger.classList.toggle('toggle-hamburger');
    })


}

navSlide();