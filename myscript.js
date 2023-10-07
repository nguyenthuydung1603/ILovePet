const slider = document.querySelector('.slider-container')
const prevBtn = document.getElementById('pre-btn')
const nextBtn = document.getElementById('next-btn')
let slideIndex = 0

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length
    updateSlider()
})

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slider.children.length
    updateSlider()
})

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`
}
