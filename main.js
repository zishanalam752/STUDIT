window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle(
        'navbg' , window.scrollY>0
    )
})


const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')

        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'fa-solid fa-chevron-down')
        icon.className = 'fa-solid fa-chevron-up';
        else
        icon.className = 'fa-solid fa-chevron-down';
    })
})


