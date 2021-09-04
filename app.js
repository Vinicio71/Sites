function init(){
    const slides = document.querySelectorAll(".slide");
    const slides1 = document.querySelectorAll(".slide1");
    const pages = document.querySelectorAll(".page");
    const categorias = document.getElementById("categorias");
    const accordionItem = document.querySelectorAll(".accordion-item"); 
    const answer = document.querySelectorAll(".answer");
    const iconosAdd = document.querySelectorAll(".accordion-link svg:first-child");
    const iconosRemove = document.querySelectorAll(".accordion-link svg:last-child");
    
    

    const backgrounds = [
        `radial-gradient(#254B75, #041629)`, 
        `radial-gradient(#E95440, #B13423)`, 
        `radial-gradient(#172C48, #0F2138)`, 
        `radial-gradient(#302C2B, #000000)`
    ];

    //Tracker
    let current = 0;
    let scrollSlide = 0;

    slides.forEach((slide, index) =>{
        slide.addEventListener('click', function(){
            changeDots(this);
            nextSlide(index);
        });
    });

    slides1.forEach((slide, index) =>{    
        slide.addEventListener('click', function(){
            var slidest = document.querySelectorAll(".slide")[index];
            changeDots(slidest);
            nextSlide(index);
            changeLinks(index);
        });
    });

    function changeLinks(indexlink){
        for(var x=0; x<(slides1.length); x++){
            slides1[x].classList.remove("active");
        }
        slides1[indexlink].classList.add("active");
        if(indexlink == (slides1.length-1)){
            indexlink = 0;
        }
    }

    function changeDots(dot){
        slides.forEach((slide) =>{
            slide.classList.remove("active");
        });
        dot.classList.add("active"); 
        
    }
    /**/ 
    function nextSlide(pageNumber){
        
        changeLinks(pageNumber);
        
        if(current != pageNumber){

            const nextPage = pages[pageNumber];
            const currentPage = pages[current];
            const portofolio = document.querySelector(".portofolio");

            const tl = new TimelineMax();

            tl.to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
            .fromTo(currentPage, 0.3,
                { opacity: 1, pointerEvents: "all" , y: "0%", display: "flex"},  
                { opacity: 0, pointerEvents: "none" , y: "-100%", display: "none"},
            )
            .fromTo(nextPage, 0.3,
                { opacity: 0, pointerEvents: "none" , y: "-100%",  display: "none" } ,
                { opacity: 1, pointerEvents: "all" ,  y: "0%", display: "grid" }, 
                '-=0.6'
            )
            current = pageNumber;

            mostrarCategorias(current);  
       } 
       
    }
    function mostrarCategorias(current){
        if(current==1){
            categorias.style.display = "block";
        }else{
            categorias.style.display = "none";
        }
    }
    /*Acordion Servicios*/  
    accordionItem.forEach((item, index) =>{
        item.addEventListener('click', function(){
            showAnswer(index);
        });
    });

    function showAnswer(index){
        if(answer[index].style.maxHeight == "20rem"){
            answer.forEach((slide) =>{
                slide.style.maxHeight = "0"; 
                "none";       
                iconosAdd[index].style.display = "block";
                iconosRemove[index].style.display = "none";
            });
        }
        else{
            answer.forEach((slide) =>{
                slide.style.maxHeight = "0";        
        });
        answer[index].style.maxHeight = "20rem";

/*Este Método se ejecuta el evento click sobre los Titulos */
/* el icono cambia de + a - (como en 1)*/
        iconosAdd.forEach((slideIcon, index) =>{
            slideIcon.style.display = "block";  
            iconosRemove[index].style.display = "none";
        });

        iconosAdd[index].style.display = "none";/* 1 */
        iconosRemove[index].style.display = "block";/* 1 */
        }        
    }  
}
init();

function SearchJobs(typeJob){ 
    var options = new Array(8);

    options[0] = ".todos";
    options[1] = "logotipos";
    options[2] = "ilustracion";
    options[3] = "productos";
    options[4] = "impresion";
    options[5] = "multimedia";
    options[6] = "editorial";
    options[7] = "fotografia";   /*.gallery-container ilustrador h1 hn   */

    alljobs = document.querySelector(".container");
    alljobs = alljobs.querySelectorAll(".gallery-container");
    
    for(i=0 ; i < alljobs.length ; i++){

        if(typeJob == alljobs[i].className.split(' ')[1])
                alljobs[i].style.display="inline-block";
        else
            alljobs[i].style.display="none";
        
        if(typeJob == "todos")
            alljobs[i].style.display = "inline-block";
       
    }


}

const navSlide = () =>{
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burguer.addEventListener('click', () =>{
        //toogle nav
        nav.classList.toggle('nav-active');
        //animate links
       navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease 
                                        forwards ${index /7 +0.5}s`;
            }
        });
        burguer.classList.toggle('toggle');
    });   
}
navSlide();

let rastreador = 0;
function displayFormContact(){
    const form = document.querySelector('#contact_form');
    const sizeNav = (document.querySelectorAll('.nav-links li').length) -1;
    const contacto = document.querySelectorAll('.nav-links li')[sizeNav];
    const close = document.querySelector('.close_form');
    const contratame = document.querySelector('#contratame');
    const contratame2 = document.querySelector('#contratame2');

    close.addEventListener('click', () => {
        form.style.transform = "translateX(-100%)";
        rastreador +=1;
    });

    contacto.addEventListener('click', () =>{   
        if((rastreador%2)==0){
            form.style.transform = "translateX(0%)";
        }else{
            form.style.transform = "translateX(-100%)";
        }
         rastreador += 1;
    }); 

    contratame.addEventListener('click', () => {
        form.style.transform = "translateX(0%)";
        rastreador +=1;
    });
    contratame2.addEventListener('click', () => {
        form.style.transform = "translateX(0%)";
        rastreador +=1;
    });  
}
displayFormContact();

