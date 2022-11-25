const hiddenElements = document.querySelectorAll(".to_load")

window.scrollTo(0, 0)

const loadTitles = (entry, observer) => {
    entry.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
        }
    })
}

const observer = new IntersectionObserver(loadTitles, {
    root: null,
    rootMargin: "-40px",
    threshold: 0.5
})

hiddenElements.forEach((element) => observer.observe(element))