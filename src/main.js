(() => {
  const topnav = document.querySelector('.topnav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 !== topnav.classList.contains('scrolled')) {
      topnav.classList.toggle('scrolled')
    }
  })
  window.setTimeout(() => document.querySelector('.hero-content').classList.add('loaded'), 500)
})()

import './webfont';
import './loadWebFonts';
