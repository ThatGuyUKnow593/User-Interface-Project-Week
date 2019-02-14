// JS goes here

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

class TabLink {
    constructor(element){
        this.element = element;
        
        this.data = this.element.dataset;
        
        this.element.addEventListener('click', ()=> this.selectInfo());
        
    }

    selectInfo(){
        let serviceTabImg = document.querySelectorAll('.serviceContImg');
        console.log(serviceTabImg);

        if(this.data = 'preConstruction'){
            serviceTabImg.src = 'img/services/services-tab-pre-construction-img.png';
        }
    }
}

let serviceBtn = document.querySelectorAll('button').forEach(tab => new TabLink(tab));