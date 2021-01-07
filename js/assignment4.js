//Question 1:
const butt1 = document.getElementById('im-right');
console.log(butt1);

const butt1Text = document.getElementById('im-right-text');

butt1.onclick = function(){
    butt1Text.innerText = 'Im right';
}

const butt2 = document.getElementById('no-im-right');
console.log(butt2);

butt2.onclick = function(){
    butt1Text.innerText = 'No, Im right!';
}

//Question 2: (commented out because it is annoying)
// const hover = document.getElementById('dontHover');
// hover.onmouseover = function(){
//     alert('Hey, I told you not to hover over me!')
// }

//Question 3/4:
document.getElementById('submission').addEventListener("click", function(event){
    const pass = document.getElementById('password').value;
    const h1 = document.getElementById('fillOut');
    event.preventDefault();
    if(pass === '12345678'){
        h1.innerHTML = 'Successful Login'
    }else{
        alert('Incorrect password')
    }
});
