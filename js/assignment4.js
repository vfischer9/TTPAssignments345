//Question 1:
const butt1 = document.getElementById('im-right');

const butt1Text = document.getElementById('im-right-text');

butt1.onclick = function(){
    butt1Text.innerText = 'Im right';
}

const butt2 = document.getElementById('no-im-right');

butt2.onclick = function(){
    butt1Text.innerText = 'No, Im right!';
}

//Question 2: (commented out because it is annoying)
const hover = document.getElementById('dontHover');
hover.onmouseover = function(){
    alert('Hey, I told you not to hover over me!')
}

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

//BONUS:
const butt3 = document.getElementById('findVol');
butt3.onclick = function(){
    const volume = document.getElementById('result');
    const radius = document.getElementById('radius').value;
    const pi = 3.14159265359;
    const newRadius = Math.pow(radius, 3);
    volume.innerText = "Volume: " + 4/3 * pi * newRadius;
}


