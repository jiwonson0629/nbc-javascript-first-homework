
const number = document.querySelectorAll(".number")
// let count = Number(number.textContent)

for(let i = 0; i < number.length ; i++){
   const total = +number[i].innerText + 10
   number[i].innerText = total
}

 

// // 1. for 문 값 10 만들기
// 2. 브라우저의 1,2,3 값을 가져오기
// 3. 가져온 후 for 문의 값과 더하기


