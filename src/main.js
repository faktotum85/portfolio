(() => {
  // fade in hero-content
  window.setTimeout(() => document.querySelector('.hero-content').classList.add('loaded'), 600)

  const topnav = document.querySelector('.topnav');
  const menuButton = document.querySelector('button.menu');

  // add transparent background to nav when scrolled
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 !== topnav.classList.contains('scrolled')) {
      topnav.classList.toggle('scrolled')
    }
  })

  // toggle open class of .topnav on click of menu button
  menuButton.addEventListener('click', () => {
    topnav.classList.toggle('open')
  })
})()
