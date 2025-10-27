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
        setSeconds(0)
        intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
                setColor("red");
                setIsRunning(true);
        }, 1000);   
    };

    const handleStop = () => {
            clearInterval(intervalRef.current);
            setIsRunning(false)
            return;
    }

    const handleResume = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
                setColor("red")
        }, 1000);    
    }

    useEffect(() => {
        if (seconds % 15 < 5) setColor("red");
        else if (seconds % 15 < 10) setColor("yellow");
        else setColor("green");
      });
    
    return(
        <div className="flex items-center justify-center flex-col ">
            <Button className="bg-green-900 mb-10" disabled={isRunning} onClick={handleStart}>
                Start
            </Button>

            <Button className="bg-blue-500 mb-10" disabled={isRunning} onClick={handleResume}>
                Resume
            </Button>

            <Button className="bg-red-700 mb-10" onClick={handleStop}>
                Stop
            </Button>
            <span>{seconds}s</span>
        </div>
    )
}
export default Timer;