(() => {
  // fade in hero-content
  window.setTimeout(() => document.querySelector('.hero-content').classList.add('loaded'), 600)

  // add transparent background to nav when scrolled
  const topnav = document.querySelector('.topnav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 !== topnav.classList.contains('scrolled')) {
      topnav.classList.toggle('scrolled')
    }
  })

  // toggle open class on menu button
  const menuButton = document.querySelector('button.menu');
  menuButton.addEventListener('click', () => {
    topnav.classList.toggle('open')
  })
})()
