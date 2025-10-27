import { Button } from "@/components/ui/button"
import { useState } from "react";

function RedLight( {color}: {color: string}) {
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