import { bgcolor } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemon } from "../Api";
import PropetyBar from "../Compenents/PropetyBar";
import { Colors } from "../Compenents/Types";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const ImageUrl = "https://img.pokemondb.net/artwork/";

  useEffect(() => {
    getPokemon(id)
      .then((res) => setPokemon(res.data[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <img
              src={`${ImageUrl}${pokemon?.Pokemon_Name.toLowerCase()}.jpg`}
              style={{
                width: 350,
                height: 350,
              }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <div
              style={{
                flex: 1,
              }}
            >
              <h2>Pokédex data</h2>
              <div style={{ borderTop: "1px   solid rgba(0, 0, 0, 0.35)" }}>
                <span style={{ color: "grey" }}>Pokedex No : </span>{" "}
                {pokemon?.Pokedex_NO}
              </div>
              <div style={{ borderTop: "1px   solid rgba(0, 0, 0, 0.35)" }}>
                <span style={{ color: "grey" }}>Pokemon Name : </span>{" "}
                {pokemon?.Pokemon_Name}
              </div>
              <div
                style={{
                  borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <span style={{ color: "grey" }}>Type :</span>{" "}
                <div>
                  {pokemon?.Pokemon_Type.split("-").map((item, i) => (
                    <span
                      key={i}
                      style={{
                        textAlign: "center",
                        width: 90,
                        backgroundColor: Colors[item],
                        color: "white",
                        marginLeft: 10,
                        padding: 5,
                        borderRadius: 10,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ borderTop: "1px   solid rgba(0, 0, 0, 0.35)",display:"flex",alignItems:"center" }}>
                <div>
                  {" "}
                  <span style={{ color: "grey" }}>
                    Ability <br></br>{" "}
                  </span>{" "}
                </div >
                <div style={{marginLeft:10}}>
                  <span style={{ color: "black" }}>
                    {pokemon?.Abilities_Name.toUpperCase()} <br></br>{" "}
                  </span>{" "}
                  <span style={{ color: "gray" }}>
                    {pokemon?.Abilities_Description}{" "}
                  </span>{" "}
                </div>
                {pokemon?.id}
              </div>
              <div
                style={{ borderTop: "1px   solid rgba(0, 0, 0, 0.35)" }}
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection:"column",
            flex: 1,
            gap:5
          }}
        >
<PropetyBar propertyName="Hp" propertyValue={pokemon?.HP}></PropetyBar>      
<PropetyBar propertyName="Attack" propertyValue={pokemon?.Attack}></PropetyBar>      
<PropetyBar propertyName="Defense" propertyValue={pokemon?.Defense}></PropetyBar>      
<PropetyBar propertyName="Sp_Atk" propertyValue={pokemon?.Sp_Atk}></PropetyBar>      
<PropetyBar propertyName="Sp_Def" propertyValue={pokemon?.Sp_Def}></PropetyBar>      
<PropetyBar propertyName="Speed" propertyValue={pokemon?.Speed}></PropetyBar>      
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
