import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { padding } from "@mui/system";
import { Colors } from "../Compenents/Types";
const ImageUrl = "https://img.pokemondb.net/artwork/";
const PokemonCard = ({ pokemon }) => {
  return (
    <Grid
      xs={2}
      sm={4}
      md={4}
      sx={{
        height: 400,
      }}
    >
      <div
        style={{
          padding: 10,
          height: "100%",
          borderRadius: 5,
          boxShadow:"2px 2px 15px #000"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              src={`${ImageUrl}${pokemon.Pokemon_Name.toLowerCase()}.jpg`}
              style={{
                width: 200,
                height: 225,
              }}
            ></img>
          </div>
          <div>
            <div
              style={{
                borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
                marginTop: 15,
              }}
            >
              <span style={{ color: "grey" }}>Pokedex No : </span>{" "}
              {pokemon?.Pokedex_NO}
            </div>
            <div
              style={{
                borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
                marginTop: 20,
              }}
            >
              <span style={{ color: "grey" }}>Pokemon Name : </span>{" "}
              {pokemon?.Pokemon_Name}
            </div>
            <div
              style={{
                borderTop: "1px  solid rgba(0, 0, 0, 0.35)",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10,
                marginTop: 25,
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
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection:"column",
          }}
        >
          <div
            style={{
              borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
              marginTop: 10,
            }}
          >
            <span style={{ color: "grey" }}>Strong Against No : </span>{" "}
            {pokemon?.Strong_Against}
          </div>{" "}
          <div
            style={{
              borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
              marginTop: 10,
            }}
          >
            <span style={{ color: "grey" }}>Weak Against : </span>{" "}
            {pokemon?.Weak_Against}
          </div>{" "}
          <div
            style={{
              borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
              marginTop: 10,
            }}
          >
            <span style={{ color: "grey" }}>Resistant To : </span>{" "}
            {pokemon?.Resistant_To}
          </div>{" "}
          <div
            style={{
              borderTop: "1px   solid rgba(0, 0, 0, 0.35)",
              marginTop: 10,
            }}
          >
            <span style={{ color: "grey" }}>Vulnerable To : </span>{" "}
            {pokemon?.Vulnerable_To}
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default PokemonCard;
