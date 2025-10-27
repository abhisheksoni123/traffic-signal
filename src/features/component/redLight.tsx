import { Button } from "@/components/ui/button"
import { useState } from "react";

function RedLight( {color}: {color: string}) {
    const [disableRedColor, setDisableRedColor] = useState(false)

    function handleDisableRedColor(){
        if(!disableRedColor){
            setDisableRedColor(true)
        }else{
            setDisableRedColor(false)
        }
    }

    return(
        <Button
        className={`rounded-lg bg-red-500 border-black ${
          color === "red" ? "opacity-100" : "opacity-50"
        }`}
      >
      
            Red Light
        </Button>
        
    )
}

export default RedLight;