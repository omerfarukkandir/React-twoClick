import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);
  const boxArray = [
    { id: 1, color: "black", title: "Obsityen" },
    { id: 2, color: "green", title: "Zümrüt" },
    { id: 3, color: "blue", title: "Lapis" },
    { id: 4, color: "red", title: "Yakut" },
  ];

  const handleClick = (id) => {
    let isSelected = selectedItems.includes(id);

    if (isSelected) {
      let temp = [...selectedItems];
      temp.splice(temp.indexOf(id), 1);
      setSelectedItems(temp);
      // selectedItems.remove(id);
    } else {
      if (selectedItems.length < 2) {
        setSelectedItems([...selectedItems, id]);
      } else {
        window.alert("En fazla 2 eleman seçebilirsiniz.");
      }
    }
  };

  const Box = ({ item }) => {
    return (
      <div
        onClick={() => handleClick(item.id)}
        className="box clickable"
        style={{
          borderColor: item.color,
          borderStyle: "solid",
          borderWidth: "1px",
          backgroundColor: selectedItems.includes(item.id) ? "purple" : "white",
        }}
      >
        <p className="text noselect">{item.title}</p>
      </div>
    );
  };

  return (
    <div className="con">
      {boxArray.map((box) => {
        return <Box item={box} />;
      })}
    </div>
  );
}

export default App;
