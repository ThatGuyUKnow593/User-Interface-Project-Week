// JS goes here


//Navigation Code
class NavDropdown {
  constructor(element){
    this.element = element;

    this.button = this.element.querySelector('#navImgBtn');

    this.content = document.querySelector('.navCenteredItems');

    this.button.addEventListener('click', () =>{
      this.toggleContent()
    })

  }

  toggleContent(){
    if (this.content.style.display === 'flex'){
      this.content.style.display = 'none';
      this.element.style.height = '50px';
      this.button.src = 'img/nav-hamburger.png';
      this.element.style.opacity = '1';
      document.body.style.backgroundColor = '#FFFFFF';
    }else {
      this.content.style.display = 'flex';
      this.element.style.height = '100%';
      this.element.style.opacity = '.95';
      this.button.src = 'img/nav-hamburger-close.png';
      document.body.style.backgroundColor = '#828282';
    }
  }
}

let nav = document.querySelectorAll('.nav').forEach(navs => new NavDropdown(navs));


//Enter Email automatically delete text onClick

let emailEnter = document.querySelector('input');

emailEnter.addEventListener('click', () =>{
    if (emailEnter.value === 'Enter email'){
        emailEnter.value = '';
    }
})

//Home page mobile image changes

if (document.documentElement.clientWidth <= 505){
    let homeHeader = document.querySelector('#homeHeaderImg');
    homeHeader.src = 'img/home/home-mobile-jumbotron.png';

    let homeSmith = document.querySelector('#homeSmithImg');
    homeSmith.src = 'img/home/home-mobile-img-1.png';
    
    let homeFuturistic = document.querySelector('#homeFuturisticImg');
    homeFuturistic.src = 'img/home/home-mobile-img-2.png';

    let homeVillas = document.querySelector('#homeVillasImg');
    homeVillas.src = 'img/home/home-mobile-villas-img.png';

    let homeOutskirts = document.querySelector('#homeOutskirtsImg');
    homeOutskirts.src = 'img/home/home-mobile-outskirts-img.png';

    let homeBlocks = document.querySelector('#homeBlocksImg');
    homeBlocks.src = 'img/home/home-mobile-the-blocks-img.png';
}



//services page tabs elements
class TabLink {
    constructor(element){
        this.element = element;
        
        this.data = this.element.dataset.tab;

        if(this.data === 'construction'){
            this.element.style.backgroundColor = '#5E9FB9';
            this.element.style.color = 'white';
        }
        
        this.element.addEventListener('click', ()=> this.selectInfo());
        
    }

    selectInfo(){
        let serviceTabImg = document.querySelector('.serviceContImg');
        let serviceTabHead = document.querySelector('.servicesTabContentTitle');
        let btn = document.querySelectorAll('button').forEach(element =>{
            element.style.backgroundColor = 'white';
            element.style.color = 'black';
        });
        console.log(this.element);

        

        if(this.data === 'preConstruction'){
            serviceTabImg.src = 'img/services/services-tab-pre-construction-img.png';
            serviceTabHead.textContent = 'Pre-Construction';
            this.element.style.backgroundColor = '#5E9FB9';
            this.element.style.color = 'white';
        }else if(this.data === 'construction'){
            serviceTabImg.src = 'img/services/services-tab-construction-img.png';
            serviceTabHead.textContent = 'Construction';
            this.element.style.backgroundColor = '#5E9FB9';
            this.element.style.color = 'white';
        }else if(this.data === 'design'){
            serviceTabImg.src = 'img/services/services-tab-design-build-img.png';
            serviceTabHead.textContent = 'Design Build';
            this.element.style.backgroundColor = '#5E9FB9';
            this.element.style.color = 'white';
        }else {
            serviceTabImg.src = 'img/services/services-tab-sustainability-img.png';
            serviceTabHead.textContent = 'Sustainability';
            this.element.style.backgroundColor = '#5E9FB9';
            this.element.style.color = 'white';
        }
    }
}

let serviceBtn = document.querySelectorAll('button').forEach(tab => new TabLink(tab));

