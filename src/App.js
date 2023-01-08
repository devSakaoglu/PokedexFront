import PokemonList from "./Pages/PokemonList";
import PokemonDetail from "./Pages/PokemonDetail";
import { Container } from "@mui/system";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Compenents/Navbar";
import HomePage from "./Pages/HomePage";
import Types from "./Compenents/Types"
import ItemPage from "./Pages/Items/ItemPage";
import PokemonsType from "./Pages/PokemonsType";
import MastersPage from "./Pages/MastersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/masters/:type" element={<MastersPage></MastersPage>}></Route>
            <Route path="/types/:id" element={<PokemonsType></PokemonsType>}></Route>
            <Route path="/Items/:itemType" element={<ItemPage></ItemPage>}></Route>
            <Route path="/PokemonList" element={<PokemonList></PokemonList>}></Route>
            <Route path="/Types" element={<Types></Types>}></Route>

            <Route
              path="/PokemonDetail/:id"
              element={<PokemonDetail></PokemonDetail>}
            ></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
