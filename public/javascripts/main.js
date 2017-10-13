(() => {
  const topnav = document.querySelector('.topnav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 !== topnav.classList.contains('scrolled')) {
      topnav.classList.toggle('scrolled')
    }
  })
})()
