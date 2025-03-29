import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface CardActionsProps {
  onAddCard: (title: string) => void;
  onClose: () => void;
  title: string;
}

function CardActions({ title, onAddCard, onClose }: CardActionsProps) {
  const [cardTitle, setCardTitle] = useState<string>("");
  return (
    <div className="flex gap-2 flex-col w-full">
      <div className="bg-black/50">
        <div className="bg-white">
          <textarea
            placeholder="Enter a title for this card..."
            className="w-full p-2 rounded-xl outline-none"
            rows={1}
            onChange={(e) => setCardTitle(e.target.value)}
            value={cardTitle}
          />
        </div>
      </div>
    
    <div>
    <button
        className="bg-blue-500 text-white px-1 py-1 rounded-md w-[100px] font-bold hover:bg-blue-600"
        onClick={()=>onAddCard(cardTitle)}
      >
        {title}
      </button>
      <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700 px-2"
      >
        <AiOutlineClose />
      </button>
    </div>
    </div>
  );
}

export default CardActions;
