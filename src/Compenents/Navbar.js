import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElMasters, setAnchorElMasters] = React.useState(null);
  const openMasters = Boolean(anchorElMasters);
  const handleClickMasters = (event) => {
    setAnchorElMasters(event.currentTarget);
  };
  const handleCloseMasters = () => {
    setAnchorElMasters(null);
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#3b3b3b",
        height: 120,
        justifyContent: "center",
        justifyItems: "center",
        marginBottom: 100,
        position: "relative",
      }}
    >
      <img
        src="https://img.pokemondb.net/design/avif/header-lg.avif"
        alt="Pokemon Database logo, with Scizor"
      ></img>
      <div
        style={{
          width: "70%",
          height: 50,
          position: "absolute",
          bottom: -35,
          display: "flex",
          backgroundColor: "grey",
          borderRadius: 15,
          justifyContent: "space-between",
          paddingLeft: 5,
          paddingRight: 5,
          alignItems: "center",
        }}
      >
        <Link
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            textDecoration:"none",
            width: "20%",
            height: 40,
          }}
          to="/"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            aria-label="Pokeball icon"
            role="img"
          >
            <g fill="#a3a3a3">
              <path d="M229.7 36.8A220.9 220.9 0 0 0 37.5 224.9l-.4 4.3h106.5l1.4-4.7a116.3 116.3 0 0 1 73-77.5 114.7 114.7 0 0 1 149 79l.9 3.2H475l-1.7-10.1A220 220 0 0 0 281 36.7c-12-1.4-39.3-1.4-51.2 0z"></path>
              <path d="M239.7 185a74 74 0 0 0-49.7 40.3 73 73 0 0 0 15.4 82.3 72.1 72.1 0 0 0 101.9-1.2 68.8 68.8 0 0 0 20.6-50.7 69.1 69.1 0 0 0-21-51.2 73.3 73.3 0 0 0-33-19c-7.6-2.1-26.4-2.3-34.2-.5z"></path>
              <path d="M37.5 286.3a220.5 220.5 0 0 0 436 4.5l1.5-8.9H367.9l-1 3.2a130 130 0 0 1-17.7 37.6 144 144 0 0 1-26.9 26.8 142 142 0 0 1-30.7 15.4 96.3 96.3 0 0 1-35.8 5.3 90 90 0 0 1-22.5-1.7 114 114 0 0 1-58.6-31.7 110.1 110.1 0 0 1-28.3-46l-2.9-8.9H37l.6 4.4h-.1z"></path>
            </g>
          </svg>
          <span
            style={{
              marginLeft: 5,
            }}
          >
            Home
          </span>
        </Link>
        <Link
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            width: "20%",
          textDecoration:"none",
          height: 40,
          }}to="/PokemonList"
        >
          {" "}
          <span
            style={{
              marginLeft: 5,
            }}
          >
            PokeDex
          </span>
        </Link>
        <div style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          width: "20%",
          height: 40,

        }}>
      <button
style={{
  fontSize:16,
backgroundColor:"transparent",
border:"none",
color:"white"
}}
        onClick={handleClick}
      >
        Items
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={`/Items/berries`}>Berries</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/Items/pokeballs`}>Pokeballs</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/Items/medicines`}>Medicines</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={`/Items/generalItems`}>General Items</Link></MenuItem>
        


      </Menu>
      
    </div>
        <Link
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            textDecoration:"none",
            width: "20%",
            height: 40,
          }}
          to="/Types"

        >
          {" "}
          <span
            style={{
              marginLeft: 5,
            }}
          >
            Types
          </span>
        </Link>
        <div style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          width: "20%",
          height: 40,

        }}>
      <button
style={{
  fontSize:16,
backgroundColor:"transparent",
border:"none",
color:"white"
}}
        onClick={handleClickMasters}
      >
        Masters
      </button>
      <Menu
        id="basic-menu1"
        anchorEl={anchorElMasters}
        open={openMasters}
        onClose={handleCloseMasters}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseMasters}><Link to={`/masters/gymleader`}>Gym Leaders</Link></MenuItem>
        <MenuItem onClick={handleCloseMasters}><Link to={`/masters/elitefour`}>Elite Fours</Link></MenuItem>

        


      </Menu>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
