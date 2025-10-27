import { Button } from "@/components/ui/button"

function YellowLight({color}: {color: string}) {
    return(
        <Button
        className={`rounded-lg bg-yellow-500 border-black ${
          color === "yellow" ? "opacity-100" : "opacity-50"
        }`}
      >Yellow Light</Button>
    )
}

export default YellowLight;