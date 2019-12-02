input = document.querySelector('.text');
btn = document.querySelector('.btn')
body = document.querySelector('body')

const inputHandlerFactory = (button,input,x)=> {
    const addText = () =>{
       
        const h2 = document.createElement('h2');
        h2.innerText  = input.value ;
        h2.style.backgroundColor = 'red'
        
        // x = document.createTextNode("X");
       
        body.append(h2);
        // h2.append(x);
    }
}
inputHandlerFactory(btn,input);

body.addEventListener('click',e =>{
    if(e.target.tagName === 'H2'){
        e.target.remove();
    }
});



