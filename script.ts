
const pSeg = document.getElementById("seg") as HTMLElement;
const hour = document.getElementById("hour") as HTMLElement;
const min = document.getElementById("min") as HTMLElement;


let pointerHours: number
let minutesZero = true;
    function initializeClock(){
        pointerHours = +new Date().toLocaleString('en-US', { hour: 'numeric', hour12: true}).split(/\D/g).join("")*30
        pointerHours += (new Date().getMinutes()*6) / 12
    }
    initializeClock()
    setInterval(()=>{
        const date = new Date()
        if(+date.getMinutes()*6 === 0 && +date.getSeconds()*6 === 0){
            initializeClock()
            minutesZero = false;
            console.log("Entrou!!!") 
        }
        pointerHours += 360 / 43200;
       
        min.style.setProperty("--rotate", +date.getMinutes()*6+"deg")
        pSeg.style.setProperty("--rotate", +date.getSeconds() * 6+'deg')
        hour.style.setProperty('--rotate', pointerHours+"deg")
    }, 1000)
   







