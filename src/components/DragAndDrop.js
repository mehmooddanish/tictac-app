

import React, { useState } from 'react';

const DragAndDrop = () => {
  const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [numbers, setNumbers] = useState(initialNumbers);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };
  
  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData('text/plain');
  
    const newNumbers = [...numbers];
    const [removed] = newNumbers.splice(sourceIndex, 1);
    newNumbers.splice(targetIndex, 0, removed);
  
    setNumbers(newNumbers);
  };

  return (
    <div className='p-4 grid grid-cols-3 gap-1'>
      {numbers.map((number, index) => (
        <div
        className='bg-gray-400 flex justify-center items-center  '
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;

// import React, { useState } from 'react';

// const Dropdown = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const options = ['Option 1', 'Option 2', 'Option 3'];

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="dropdown">
//       <div className="dropdown-trigger">
//         <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
//           {selectedOption || 'Select an option'}
//         </button>
//       </div>
//       <div className="dropdown-menu bg-slate-400" id="dropdown-menu" role="menu">
//         <div className="dropdown-content">
//           {options.map((option, index) => (
//             <a
//               key={index}
//               href="#"
//               className="dropdown-item"
//               onClick={() => handleOptionSelect(option)}
//             >
//               {option}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;


// import React, { useState } from 'react';

// const DragAndDropExample = () => {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
//   const [droppedItems, setDroppedItems] = useState([]);

//   const handleDragStart = (e, itemIndex) => {
//     e.dataTransfer.setData('text/plain', itemIndex);
//     console.log(itemIndex)
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const droppedItemIndex = e.dataTransfer.getData('text/plain');

//     const droppedItem = items[droppedItemIndex];

//     const updatedItems = items.filter((_, index) => index !==  parseInt(droppedItemIndex));
//     setItems(updatedItems);

//     setDroppedItems((prevItems) => [...prevItems, droppedItem]); 
//   };

//   return ( 
//     <div>
//       <div className="drag-source bg-violet-300 w-[200px]">
//         {items.map((item, index) => (
//           <div
//             key={index}

//             className="draggable-item"
//             draggable
//             onDragStart={(e) => handleDragStart(e, index)}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       <div
//         className="drop-target border-[2px] h-[300px] border-gray-500
//          w-[50%] bg-slate-500"
//         onDragOver={(e)=>handleDragOver(e)}
//         onDrop={(e)=>handleDrop(e)}
//       >
//         {droppedItems.map((item, index) => (
//           <div key={index} className="dropped-item bg">
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DragAndDropExample;
