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
