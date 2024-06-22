const container = document.querySelector('.container');
const newDiv = document.querySelector('div');


function getGridChoice() {
    // get children
    children = container.children;
    // delete each child
    for (let i = children.length - 1; i >= 0; i--) {
      container.removeChild(children[i]);
    }
    
    // get number of divs to generate
    let gridChoice = prompt('Please enter the number of boxes you want: ');
    let gridChoiceNumber = Number(gridChoice);
  
    // generate divs
    for (let i = 0; i < gridChoiceNumber; i++) {
      let newDiv = document.createElement('div');
      newDiv.textContent = 'Hi Mimi!';
      container.appendChild(newDiv);

      newDiv.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "white";
    });
    
    newDiv.addEventListener('mouseout', event => {
        setTimeout(function () {
            event.target.style.backgroundColor = "rgb(226, 43, 177)";
    }, 1000);   
    });
    };
  };
