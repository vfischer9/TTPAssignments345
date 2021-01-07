// 1). Select the section with an id of container without using querySelector:
const contain = document.getElementById('container');
console.log(contain);

//2). Select the section with an id of container using querySelector:
const contain2 = document.querySelector('#container');
console.log(contain2);

//3). Select all of the list items with a class of "second":
const sec = document.getElementsByClassName('second');
const arrayLike2 = Array.from(sec);
arrayLike2.forEach(second => {
    console.log(second);
});

//4). Select a list item with a class of third, but only the list item inside of the ol tag.
const quest4 = document.querySelector("#container ol .third");
console.log(quest4);


//5). Give the section with an id of container the text "Hello!".
const section = document.getElementById('container');
// section.innerText = 'Hello!';

//6). Add the class main to the div with a class of footer:
const footer = document.querySelector('.footer');
footer.classList.add('main');
console.log(footer);


//7). Remove the class main on the div with a class of footer:
footer.classList.remove('main')
console.log(footer);

//8) Create a new li element:
const newLi = document.createElement('li');
console.log(newLi);

//9). Give the li the text "four":
newLi.innerText = 'four';

//10). Append the li to the ul element:
const ul = document.querySelector('ul');
ul.append(newLi);

//12). Loop over all of the lis inside the ol tag and give them a 
//background color of "green":
const lists = document.querySelectorAll('ol li');
for (let i = 0; i < lists.length; i++){
    lists[i].style.backgroundColor = 'green';
}

//13). Remove the div with a class of footer:
const footer2 = document.querySelector('.footer');
footer2.remove();