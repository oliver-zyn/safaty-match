const navbar = document.getElementById("navbar");

const links = navbar.getElementsByClassName("link");

const mobileButton = document.querySelector('#navbar--btnMobile')

for (let link of links) {
  link.addEventListener("click", function(e) {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].classList.remove("active");
    }

    console.log(e.target);

    e.target.classList.add("active");
  });
}

function menu(){
  navbar.classList.toggle('activeN')
  mobileButton.classList.toggle('activeM')
}

window.onscroll = () => {
  navbar.classList.remove('activeN')
  mobileButton.classList.toggle('activeM')
}

function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);