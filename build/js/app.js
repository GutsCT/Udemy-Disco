document.addEventListener('DOMContentLoaded', ()=>{
    naegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})


function naegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll',()=>{
        if(sobreFestival.getBoundingClientRect().bottom<1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })

   
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    const imagenes = document.createElement('IMG')
    for(let i = 1; i<17; i++){
        const imagenes = document.createElement('IMG')
        imagenes.src = `src/img/gallery/full/${i}.jpg`
        imagenes.alt = 'imagen galeria'

        //event handle
        imagenes.onclick = function (){
            mostrarImagen(i)
        }
        galeria.appendChild(imagenes)
    }   
}

function mostrarImagen(i){
    //generar imagen
    const imagenes = document.createElement('IMG')
    imagenes.src = `src/img/gallery/full/${i}.jpg`
    imagenes.alt = 'imagen galeria'

    //generar Modal e imagen
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    //generar imagen
    modal.appendChild(imagenes)

    //generar boton
    const boton = document.createElement('BUTTON')
    boton.textContent = 'X'
    boton.classList.add('btn-cerrar')
    modal.appendChild(boton)


    //agreggar body HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

    imagenes.onclick = function (){
        mostrarImagen(i)
    }
     //eliminar modal
    modal.onclick = eliminarModal

}

function eliminarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(()=>{
        if(modal){
            modal.remove()
            const body = document.querySelector('body')
            body.classList.remove('overflow-hidden')
        }
    },500)
}

function resaltarEnlace(){
    document.addEventListener('scroll', ()=>{
        const sections = document.querySelectorAll('section')
        const navlink = document.querySelectorAll('.navegacion-principal a')
        
        let actual = ''

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id
            }
        });

        navlink.forEach(link=>{
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })
    })
}

function scrollNav(){
    const navlinks = document.querySelectorAll('.navegacion-principal a')
    navlinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}