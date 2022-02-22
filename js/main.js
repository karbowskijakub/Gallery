const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navLink = document.querySelectorAll('a')


const clicker = () => {
   
   if( burgerBtn.classList.toggle('is-active')){
    navMobile.style.transform = 'translateX(0)'
    navLink.classList.add('marginTop')
   }
    else{
        navMobile.style.transform = 'translateX(-300px)'
    }
}
document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.nav-desktop')
    function addShadow(){
        if(window.scrollY >= 100){
            
            nav.classList.add('active')

        }else{
            nav.classList.remove('active')
        }

    }

    window.addEventListener('scroll',addShadow)
})
document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.nav-hamburger')
    function addShadow(){
        if(window.scrollY >= 100){
            
            nav.classList.add('active')

        }else{
            nav.classList.remove('active')
        }

    }

    window.addEventListener('scroll',addShadow)
})


burgerBtn.addEventListener('click',clicker);