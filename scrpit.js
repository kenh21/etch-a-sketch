const container = document.querySelector('.container');



for (let i = 1; i <= 64; i++) {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Hi Mimi';
    container.appendChild(newDiv);
};
console.log(container);


