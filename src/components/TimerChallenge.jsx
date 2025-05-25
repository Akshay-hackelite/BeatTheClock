import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({title,targetTime}){
    const timer=useRef();
    const dialog=useRef()

    const[Remaining,setRemaining]=useState(targetTime*1000)
    const timerIsActive=Remaining>0&&Remaining<targetTime*1000
    if(Remaining<=0){
        clearInterval(timer.current)
        dialog.current.showModal();
    }
    function handleStart(){
       timer.current=setInterval(() => {
           setRemaining(prevRemaining=>prevRemaining-10)
        },10);
    }
    function handleStop(){
        clearInterval(timer.current)
        dialog.current.showModal();
    }
    function handleReset(){
        setRemaining(targetTime*1000)
    }
    return(
        <>
        {<ResultModal ref={dialog} targetTime={targetTime} remaining={Remaining} onReset={handleReset}/>}
        <section className="challenge">
            <h2>{title}</h2>
            
            <p className="challenge-time">
                {targetTime}second{targetTime>1?'s':''}
            </p>
          <p><button onClick={timerIsActive?handleStop:handleStart}>{timerIsActive?"Stop challenge":"Start Challenge"}</button></p>  
          <p className={timerIsActive?"active":undefined}>
            {timerIsActive?'Timer is Running':'Timer Inactive'}
          </p>

        </section>
         </>
        
    )
}