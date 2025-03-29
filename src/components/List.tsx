import React from "react";
import Card from "./Card";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import CardActions from "./CardActions";

function List({title}: {title: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState<string[]>([]);

  const handleAddCard = (title: string) => {
    if (title.trim()) {
      setCards([...cards, title]);
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-[#f1f2f4] rounded-lg p-4 w-[272px] flex flex-col gap-2 shadow-sm self-start">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-700 text-sm px-1">{title}</h2>
        <button className="p-1 hover:bg-gray-300 rounded">
          <BsThreeDots className="text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {cards.map((card, index) => (
          <Card key={index} title={card} />
        ))}
      </div>

      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)} 
          className="flex items-center gap-2 text-gray-600 text-sm px-1 py-1.5 hover:bg-gray-300/50 rounded-md mt-1"
        >
          <AiOutlinePlus className="text-sm" />
          <span>Add a card</span>
        </button>
      ) : (
        <CardActions 
          onAddCard={handleAddCard}
          onClose={() => {
            setIsOpen(false);
          }}
          title="Add Card"
        />
      )}
    </div>
  );
}

export default List;
