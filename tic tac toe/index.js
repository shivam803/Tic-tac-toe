const Allboxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    
    //Let's create a function to intialise the game;
    function initGame() {
        currentPlayer = "X";
        gameGrid = ["","","","","","","","",""];

        Allboxes.forEach((box , index)=>{
            console.log(box,index)
        box.innerHTML = "";
        Allboxes[index] = Allboxes[index].style.pointerEvents = "all ";
        winningPositions.forEach((position)=>{
            Allboxes[position[0]].classList.remove('win');
            Allboxes[position[1]].classList.remove('win');
            Allboxes[position[2]].classList.remove('win');
        })

    })
    

        newGameBtn.classList.remove('active')
        gameInfo.innerHTML = `Current Game - ${currentPlayer}`;
    }
    

    function checkGameOver(){

        let answer = "";
        winningPositions.forEach((position)=>{
            if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]!==""])
            &&(gameGrid[position[0]]==gameGrid[position[1]] && gameGrid[position[1]]==gameGrid[position[2]])){

            if(gameGrid[position[0]]=="X")
                answer = "X";
            

                else
                    answer = "0";
                //disable pointer events
                Allboxes.forEach((box)=>{
                    box.style.pointerEvents = "none";

                })
                Allboxes[position[0]].classList.add('win');
                Allboxes[position[1]].classList.add('win');
                Allboxes[position[2]].classList.add('win');
                }
               
                        

                    });
                  // Check if all boxes are filled and no one has won
    if (answer === "" && gameGrid.every((box) => box !== "")) {
        gameInfo.innerHTML = `It's a tie!`;
        newGameBtn.classList.add('active');

    }
    

            if(answer!=""){
                gameInfo.innerHTML = `Winner is ${answer}`
                newGameBtn.classList.add('active');
            }
           


    }
    function handleClick(index){

        if(gameGrid[index]===""){
         Allboxes[index].innerHTML = currentPlayer; 
         gameGrid[index] = currentPlayer;
         //pointer will not point once the box is filled w x or 0
         Allboxes[index].style.pointerEvents = "none";
         newGameBtn.classList.add('active')

         SwapTurn();
         //check game is over or not
         checkGameOver();
        }
    }    
        
    
    Allboxes.forEach((box, index) => {
            box.addEventListener('click', () => {
                handleClick(index);
                
            })
        });

function SwapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
        else{
            currentPlayer = "X";
        }
    //UI update game info
    gameInfo.innerHTML = `Current Game - ${currentPlayer}`


        
}
newGameBtn.addEventListener('click',initGame);

initGame();


