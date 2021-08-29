import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList({ colors, removeColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colors.map( (color, i) => (
        <DraggableColorBox 
          color={color.color} 
          name={color.name}
          index={i}
          handleClick={() => removeColor(color.name)}
          key={color.name}
          distance={20}
        />
      ))}
    </div>
  )
};

export default SortableContainer(DraggableColorList);