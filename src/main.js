(() => {
  // inject font link tag
  const fontLink = document.createElement('link');
  fontLink.setAttribute('href', 'https://fonts.googleapis.com/css?family=Merryweather:400,700%7COpen%20Sans:400,700')
  fontLink.setAttribute('rel', 'stylesheet')
  document.querySelector('head').appendChild(fontLink)

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
