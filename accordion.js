const accordion = function (item) {
  const el = document.querySelector(item);
  if (!el) {
    throw new Error('Accordion must be instantiated with a valid dom query');
    return;
  }
  
  const children = el.children;
  
  const parentStyles = {
    display: 'flex',
    width: '100%'
  }
  
  const childStyles = {
    flex: '1'
  }
  
  el.classList.add('accordion');
  
  for (let i = 0; i < children.length; i++) {
    children[i].classList.add('accordion-item');
    children[i].children[0].classList.add('accordion-toggle');
    children[i].children[1].classList.add('accordion-content');
    
    children[i].children[0].addEventListener('click', function(){
      const parent = this.parentNode;
      if (parent.classList.contains('open')) {
        parent.classList.remove('active');
        
        setTimeout(() => {
          parent.classList.remove('open');
        }, 300);
      }
      else {
        parent.classList.add('open');
        
        setTimeout(() => {
        if (parent.classList.contains('open')) {
          parent.classList.add('active');
        }
      }, 100);
      }
    });
    
  }
  
  
}

accordion('#accordion');