// 브라우저를 새로고침 시 0부터 시작해 10까지 숫자가 1초에 1씩 
// 증가하도록 만들어보세요. 10부터는 더 이상 숫자가 커지면 안됩니다. (clearInterval 도 꼭 사용해보세요)
const time = document.querySelector(".time")

let count = Number(time.textContent);
let intervel = setInterval(()=>{
if (count < 10){
    count = count + 1
    time.innerHTML = count;
} else{
   clearInterval(intervel)
}
},1000)
