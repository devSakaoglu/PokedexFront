import React from "react";
import { useParams } from "react-router-dom";
import { getPokemonsType } from "../Api";
import PokemonCard from "../Compenents/PokemonCard";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { integerPropType } from "@mui/utils";
import Grid from "@mui/material/Unstable_Grid2";
import Box from '@mui/material/Box';
const PokemonsType = () => {
  const { id } = useParams();
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    getPokemonsType(id)
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2,sm:3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}

      >
        {pokemons.slice((page - 1) * 6, page * 6).map((item, index) => (
          <PokemonCard
            key={item.Pokedex_NO}
            pokemon={item}
          ></PokemonCard>
        ))}
      </Grid>
      </Box>
      <div style={{
        display:"flex",
        marginTop:38,
        alignItems:"center",
        justifyContent:"center"
      }}>
                <Pagination
          count={
            pokemons.length % 6 == 0
              ? parseInt(pokemons.length / 6)
              : parseInt(pokemons.length / 6) + 1
          }
          page={page}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};
parseInt();
export default PokemonsType;
