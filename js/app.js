const handleGoToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

document.getElementById('toTopBtn').addEventListener('click', handleGoToTop)

document.addEventListener('scroll', () => {
    const toTopBtn = document.getElementById('toTopBtn')
    const currentTop = window.pageYOffset || document.documentElement.scrollTop

    if (currentTop > 800) {
        toTopBtn.style.display = 'flex'
        toTopBtn.style.top = `calc(100vh - 170px - 36px + ${currentTop}px)`
    } else {
        toTopBtn.style.display = 'none'
    }
})
