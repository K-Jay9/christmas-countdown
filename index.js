
let target = '25 Dec 2020'

const ctnDay = document.getElementById('ctn-day')
const ctnHour = document.getElementById('ctn-hour')
const ctnMinute = document.getElementById('ctn-minute')
const ctnSecond = document.getElementById('ctn-second')


function timeCounter(){
    let newTarget = new Date(target)
    
    
    let now = new Date()
    let result = Math.floor(newTarget - now)
    
    let totalseconds = Math.floor(result/1000)
    
    let days = Math.floor(totalseconds/3600/24);
    let hours = timeFormat(Math.floor(totalseconds/3600)%24);
    let minutes= timeFormat(Math.floor(totalseconds/60)%60);
    let seconds = timeFormat(Math.floor(totalseconds)%60);
    
    ctnDay.innerHTML = days
    ctnHour.innerHTML = hours 
    ctnMinute.innerHTML = minutes
    ctnSecond.innerHTML = seconds


}
function timeFormat(n){
    return n < 10 ? `0${n}` : n
}
 timeCounter()
 setInterval(timeCounter, 1000)