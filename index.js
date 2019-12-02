input = document.querySelector('.text');
btn = document.querySelector('.btn')
body = document.querySelector('body')

const inputHandlerFactory = (button,input)=> {
    const addText = () =>{
       
        const h2 = document.createElement('h2');
        h2.innerText  = input.value ;
        h2.style.backgroundColor = 'red';
        h2.style.display = 'flex';
        h2.style.justifyContent = 'space-between'
        
        x = document.createElement('button');
        x.setAttribute("class","Xspan")
        x.innerText = "X"
        body.append(h2);
        h2.append(x);
    }
    button.addEventListener('click',addText)
}
inputHandlerFactory(btn,input);



body.addEventListener('click',e =>{
    if(e.target.className === 'Xspan'){
        e.target.closest('H2').remove();
    }
});




