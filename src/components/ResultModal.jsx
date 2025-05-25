export default function ResultModal({ref,remaining,targetTime,onReset}){
    const score=Math.round((1-(remaining/(targetTime*1000)))*100)
    return<dialog ref={ref} className="result-dialog">
        {console.log(remaining)}
        {remaining<=0&&<h2>You Lose</h2>}
        {remaining>0&&<h2>Your score:{score}</h2>}
        <p>The target time was <strong>{targetTime}seconds</strong></p>
        <p>You stopped the timer with <strong>{(remaining/1000).toFixed(2)} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
}