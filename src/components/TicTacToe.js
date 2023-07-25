import index from "@/pages/add";
import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [Xplayer, setXplayer] = useState(true);
  const [xScore, setXscore] = useState(0);
  const [OScore, setOscore] = useState(0);
  const [model, setModel] = useState(false);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

//   const cheakWinner = (board) => {
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];

//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return board[a];
//       }
//     }
//   };

//   const handleClick = (ind) => {
//     const matchCell = board.map((item, index) => {
//       if (index === ind) {
//         setXplayer(!Xplayer);
//         return Xplayer ? "X" : "O";
//       }
//       return item;
//     });
//     setBoard(matchCell);
//     const winner = cheakWinner(matchCell);

//     if (winner) {
//       setBoard(Array(9).fill(""));
//       if (winner === "X") {
//         setXscore((preState) => preState + 1);
//       } else {
//         setOscore((preState) => preState + 1);
//       }
//     }
//     const notEmpty = matchCell.every((cell) => cell !== "");

//     if (notEmpty && !winner) {
//       setModel(true);
//       setBoard(Array(9).fill(""))
//       setXplayer(true)
//     }
//   };

//   const handleRestart = () => {
    
//     setBoard(Array(9).fill(""));
//     setXscore(0);
//     setOscore(0);
//     setXplayer(true);
//   };

// const cheakWinner = (board) =>{
// for(let i =  0; i<lines.length; i++){
//     const [a,b,c] = lines[i]
    
//     if(board[a] && board[a] === board[b] && board[b]===board[c]){
//         console.log(board[a])
//       return board[a]
//     }
// }
// }
const cheakWinner = (board) =>{
for(let i=0; i<lines.length; i++){
  const [a,b,c] = lines[i]
  if(board[a] && board[a]===board[b] && board[b]===board[c]){
   return board[a]
  }
}
  }



// const handleClick = (ind) =>{
// const matchCell = board.map((cell, index)=>{
    // if(!index === ind){

    //         if(index === ind){
    //             setXplayer(!Xplayer)
    //             return Xplayer ? "X" : "O"
    //         }
    //         return cell;
    //     })
    // }
// setBoard(matchCell)

// cheakWinner(matchCell)
// }


const handleClick = (ind) => {
    const matchCell = [...board]; 
  
    if (!matchCell[ind]) {
      matchCell[ind] = Xplayer ? "X" : "O";
      setXplayer(!Xplayer);
      setBoard(matchCell);
     
   const winner =  cheakWinner(matchCell);

     if(winner){
      setBoard(Array(9).fill(""))
        if(winner === "X"){
            setXscore((preState)=>preState  + 1)
        }else{
          setOscore((preState)=>preState + 1)
        }
     }
  
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-[200px] justify-between p-2">
          <span
            className={`border-red-600 ${
              Xplayer ? "border-b-2" : "border-b-none"
            }`}
          >
            X Score : {xScore}
          </span>
          <span
            className={`border-red-600 ${
              Xplayer ? "border-b-none" : "border-b-2"
            }`}
          >
            O Score : {OScore}
          </span>
        </div>
        <div className="grid grid-cols-3 place-items-center h-[200px] w-[200px]">
          {board.map((cell, index) => (
            <div
              key={index}
              className="border-collapse border-2 flex justify-center items-center border-gray-500 h-16 w-16"
              onClick={() => handleClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <div className="w-[200px] grid place-items-center">
          <button
            className="px-2 py-1 bg-violet-400 mt-2"
            // onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>

{/* model  for popup */}

      <div
        className={`${
          model ? "block" : "hidden"
        } fixed inset-0 top-[56px] flex justify-center items-center bg-black/50 backdrop-blur-sm`}
        // onClick={() => setModel(false)}
      >
        <div className="h-[100px] w-[300px] flex flex-col justify-center items-center bg-white">
          <p>This Match Is Draw ! </p>
          <p>Play Again !</p>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
