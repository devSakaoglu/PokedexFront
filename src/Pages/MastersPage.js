import React from "react";
import { useParams } from "react-router-dom";
import EliteFour from "../Compenents/EliteFour";
import GymLeader from "../Compenents/GymLeader";

const MastersPage = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <>
      {type == "elitefour" && <EliteFour></EliteFour>}
      {type == "gymleader" && <GymLeader></GymLeader>}
    </>
  );
};

export default MastersPage;
