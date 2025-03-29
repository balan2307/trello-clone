import React from "react";
import List from "./List";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react"; 
import CardActions from "./CardActions";

function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [lists, setLists] = useState<string[]>(["To Do", "In Progress", "Done"]);
  
  return (
    <div className="flex gap-4 w-full overflow-x-auto">
      <div className="flex flex-row gap-4">
        {lists.map((list, index) => (
          <List key={index} title={list} />
        ))}
      </div>

      <div className="flex flex-col justify-start items-start border border-gray-300 rounded-md p-2 w-[25%] h-min" >
        {!isOpen && (
          <button className="rounded-md w-[150px] font-bold" onClick={() => setIsOpen(!isOpen)}>
            Add another list
          </button>
        )}
        {isOpen && (
         <div className="w-[272px]">
           <CardActions 
            title="Add List" 
            onAddCard={(title) => {setLists([...lists, title])}} 
            onClose={() => {setIsOpen(false)}}
          />
         </div>
        )}
      </div>
    </div>
  );
}

export default Board;
