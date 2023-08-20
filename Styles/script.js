let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if(value > 200) {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.801)';
        document.body.style.transition = '0.7s';
    }
    else{
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.transition = '0.7s'
    }
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px'
    hill4.style.left = value * -1.5 + 'px'
    hill5.style.left = value * 1.5 + 'px';
})