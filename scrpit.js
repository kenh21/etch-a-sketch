const container = document.querySelector('.container');
const newDiv = document.querySelector('div');



for (let i = 1; i <= 64; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Hi Mimi';
    container.appendChild(newDiv);
};
console.log(container);

newDiv.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "rgb(133, 10, 101)";
});

newDiv.addEventListener('mouseout', event => {
    setTimeout(function () {
        event.target.style.backgroundColor = "rgb(226, 43, 177)";
}, 3000);   
});
