const observar = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})

Array.from(document.querySelectorAll('.hidden')).forEach(element => {
    observar.observe(element)
})
