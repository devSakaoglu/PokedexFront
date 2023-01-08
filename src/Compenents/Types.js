import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTypes } from "../Api";

export const Colors = {
  BUG: "#ab2",
  DARK: "#754",
  DRAGON: "#76e",
  ELECTRIC: "#fc3",
  FAIRY: "#e9e",
  FIGHTING: "#b54",
  FIRE: "#f42",
  FLYING: "#89f",
  GHOST: "#66b",
  GRASS: "#7c5",
  GROUND: "#db5",
  ICE: "#6cf",
  NORMAL: "#aa9",
  POISON: "#a59",
  PSYCHIC: "#f59",
  ROCK: "#ba6",
  STEEL: "#aab",
  WATER: "#39f",
};
const Types = () => {
  const [types, setTypes] = useState([]);
  React.useEffect(() => {
    getTypes()
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {types.map((item, i) => (
        <Link
          to={`/types/${item.Type_Id}`}
          key={i}
          style={{
            textAlign: "center",
            width: 90,
            backgroundColor: Colors[item?.Type_Name.toUpperCase()],
            color: "white",
            marginLeft: 10,
            padding: 10,
            borderRadius: 15,
          }}
        >
          {item?.Type_Name.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default Types;
