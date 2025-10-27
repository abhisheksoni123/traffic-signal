import { Button } from "@/components/ui/button"

function GreenLight({color}: {color: string}) {
    return(
        <Button
        className={`rounded-lg bg-green-500 border-black ${
          color === "green" ? "opacity-100" : "opacity-50"
        }`}
      >
        Green Light
      </Button>
      
    )
}

export default GreenLight;