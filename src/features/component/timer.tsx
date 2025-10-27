import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";


function Timer(
    { setColor }: 
    { setColor: (color: string) => void }
    ){

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout>(null);

    const handleStart = () => {

        console.log("seconds123", seconds)
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                    setSeconds((prev) => prev + 1);
                    setColor("red")
                   
                  
            }, 1000);   
        }
    };

    const handleStop = () => {
        if (isRunning) {
            setIsRunning(true);
            clearInterval(intervalRef.current);
            return;
        }
    }

    const handleResume = () => {
        if (isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                    setSeconds((seconds) => seconds + 1);
                    setColor("red")
                   
                  
            }, 1000);   
        }
    }

    useEffect(() => {
        if (seconds % 15 < 5) setColor("red");
        else if (seconds % 15 < 10) setColor("yellow");
        else setColor("green");
      });
    
    return(
        <div className="flex items-center justify-center flex-col ">
            <Button className="bg-pink-900 mb-10" onClick={handleStart}>
                Start
            </Button>

            <Button className="bg-pink-900 mb-10" onClick={handleResume}>
                Resume
            </Button>

            <Button className="bg-pink-900 mb-10" onClick={handleStop}>
                Stop
            </Button>
            <span>{seconds}s</span>
        </div>
    )
}
export default Timer;