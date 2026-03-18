let display = document.querySelector('.screenContainer')



function clicker(text){
    if(display.innerHTML === '0'||display.innerHTML === 'error'){
        display.innerHTML = text
        return;
    }
    display.innerHTML = `${display.innerHTML}${text}`
}
function ClearDisplay(){
    display.innerHTML = '0'
}
function equalTo(){
 try {
    display.innerHTML = eval(display.innerHTML)
 } catch (error) {
    display.innerHTML = 'error'
 }
}