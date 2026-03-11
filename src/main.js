// ── Fade-in on scroll ────────────────────────────────────────
const fadeTargets = document.querySelectorAll('section')

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.08 }
)

fadeTargets.forEach((el) => {
  el.classList.add('fade-in')
  // If already in the viewport on load (e.g. hero), show immediately
  if (el.getBoundingClientRect().top < window.innerHeight) {
    el.classList.add('visible')
  } else {
    fadeObserver.observe(el)
  }
})

// ── Active nav link on scroll ─────────────────────────────────
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('nav a[href^="#"]')

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          )
        })
      }
    })
  },
  { rootMargin: '-40% 0px -55% 0px' }
)

sections.forEach((section) => activeObserver.observe(section))

// ── Mobile nav toggle ─────────────────────────────────────────
const toggle = document.getElementById('nav-toggle')
const navList = document.getElementById('nav-links')

if (toggle && navList) {
  toggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(isOpen))
  })

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}
