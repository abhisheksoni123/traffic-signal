import { Button } from "@/components/ui/button"

function GreenLight({color}: {color: string}) {
    return(
        <Button
        className={`rounded-full w-16 h-16 bg-green-500 border-black ${
          color === "green" ? "opacity-100" : "opacity-50"
        }`}
      ></Button>
      
    )
}

export default GreenLight;