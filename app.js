let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(time,1000);

function time()
{
   
let date=new Date()

hrs.innerHTML=date.getHours()

if(hrs.innerHTML<10)
{
    hrs.innerHTML="0"+date.getHours()
}

min.innerHTML=date.getMinutes()
if(min.textContent<10)
{
    min.innerHTML="0"+date.getMinutes()
}

sec.textContent=date.getSeconds()
if(sec.textContent<10)
    {
        sec.innerHTML="0"+date.getSeconds()
    }
}
