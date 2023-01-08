import React from 'react'
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const colorSheme={
    Hp:"#F96666",
    Attack:"#C21010",
    Defense:"#1C6758",
    Sp_Atk:"#AC4425",
    Sp_Def:"#86C8BC",
    Speed:"#5F8D4E"
}
const BorderLinearProgress = styled(LinearProgress)(({ theme,color }) => ({
    
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:'var(--renk)'
    },
  }));
const PropetyBar = ({propertyName,propertyValue}) => {
  return (
    <div
    style={{
      display: "flex",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      justifyItems: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display:"flex",
        width: "18%",
        justifyContent:"space-between"
      }}
    >
      <div>{propertyName}</div>
     <div style={{marginRight:15}}>{propertyValue}</div>

    </div>
    <div
      style={{
        
        width: "82%",
      }}
    >
      <BorderLinearProgress  style={{
        '--renk':colorSheme[propertyName]
      }}  variant="determinate" value={(propertyValue * 100) / 250} />
    </div>
  </div>
  
  )
}

export default PropetyBar
