(() => {
  // fade in hero-content
  window.setTimeout(() => document.querySelector('.hero-content').classList.add('loaded'), 600)

  const topnav = document.querySelector('.topnav');
  const menuButton = document.querySelector('button.menu');
  const mobileNav = document.querySelector('nav.mobile');

  // toggle open class of .topnav on click of menu button
  menuButton.addEventListener('click', () => {
    topnav.classList.toggle('open')
  });

  // close mobile menu on selection
  mobileNav.addEventListener('click', () => {
    topnav.classList.remove('open')
  });
})()
