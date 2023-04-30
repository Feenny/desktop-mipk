const header = document.querySelector('.header');
const navigation = document.querySelector('.nav-bar');
const search = document.querySelector('.search');
const locat = document.querySelector(".location")
const navigationHeight = navigation.offsetHeight;

window.addEventListener('scroll', function() {

    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 0) {
      navigation.style.display = 'none';
      locat.style.display = 'none';
      header.classList.add("header-slide")
    } else {
      navigation.style.display = 'block';
      locat.style.display = 'block';
      header.classList.remove("header-slide")
    }
  });