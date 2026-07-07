import './styles.css'

const yearElement = document.querySelector<HTMLSpanElement>('#year')

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear())
}

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href')
    if (!targetId || targetId === '#') return

    const target = document.querySelector(targetId)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})
