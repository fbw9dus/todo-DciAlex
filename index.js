input = document.querySelector('.text');
btn = document.querySelector('.btn')
body = document.querySelector('body')

const inputHandlerFactory = (button,input)=> {
    const addText = () =>{
       
        const h2 = document.createElement('h2');
        h2.innerText  = input.value
        h2.style.backgroundColor = 'red'
        body.append(h2);


    }
    button.addEventListener('click',addText)
}
inputHandlerFactory(btn,input)