import { Button } from "@mui/material";
import React from "react";

export default function TestPropsKanban(props) {

    return (
        <Button 
        onClick={()=>console.log("Props TEST-PROPS: ", props) }
        >
            Show Propos
        </Button>
    )
    
}