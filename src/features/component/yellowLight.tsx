import { Button } from "@/components/ui/button"

function YellowLight({color}: {color: string}) {
    return(
        <Button
        className={`rounded-full w-16 h-16 bg-yellow-500 border-black ${
          color === "yellow" ? "opacity-100" : "opacity-50"
        }`}
      ></Button>
    )
}

export default YellowLight;