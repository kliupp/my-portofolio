
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');  
            observer.unobserve(entry.target);  
        }
    });
}, { threshold: 0.1 });  


const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    observer.observe(element);  
});
