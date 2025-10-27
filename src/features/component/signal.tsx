import GreenLight from "./greenLight";
import RedLight from "./redLight";
import YellowLight from "./yellowLight";
import Timer from "./timer";
import { useState } from "react";

function Signal() {
    const [color, setColor] = useState("");
    return(
        <div>
            <div className="p-8">
                <Timer setColor={setColor}/>
            </div>
            <div className="flex items-center justify-center pt-10">
                <div className="flex flex-col gap-6">
                    <RedLight color={color} />
                    <YellowLight color={color} />
                    <GreenLight color={color} />
                </div>
            </div>
        </div>   
    )

}
export default Signal;