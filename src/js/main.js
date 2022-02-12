/*=============== CHANGE BACKGROUND HEADER SCROLLING ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== CHANGE THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
console.log(selectedTheme)
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== MIXITUP (FILTER WORK CARTEGORY) ===============*/
var mixerWork = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/* Changing the active work carrtegory background */

let workItem = document.querySelectorAll('.work_item');

function activeWork() {
    workItem.forEach(i => i.classList.remove('active-work-category')) 
    this.classList.add('active-work-category')
}

workItem.forEach(i => i.addEventListener('click', activeWork));

/* Opening a work modal (popup) when clicked */

let modalView = document.querySelectorAll('.work_modal');
    modalButtons = document.querySelectorAll('.work_button');
    modalClose = document.querySelectorAll('.work_modal_close');


/* Add class to the item when clicked */
let modal = function(modalClick) {
    modalView[modalClick].classList.add('active-modal');
}

modalButtons.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

// Close button in popup
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalView.forEach((modalView) => {
            modalView.classList.remove('active-modal'); 
        })
    })
})

/* change Active Item in Nav */
/*=============== SCROLL SECTIONS ACTIVE ITEM ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-item')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-item')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
let scrollRev = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2500,
    delay: 400,
    //reset: true
})


scrollRev.reveal(`.home_data`)
scrollRev.reveal(`.home_handle`, {delay: 500})
scrollRev.reveal(`.home_social, .home_scroll`, {delay: 700, origin: 'bottom'})