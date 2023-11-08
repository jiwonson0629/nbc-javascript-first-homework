// 1. 스크롤이 가능하도록 body 태그의 높이를 200vh로 설정합니다. (200vh는 실제 브라우저 높이의 2배 사이즈를 body 태그에 부여한다는 의미입니다.)
// 2. 브라우저의 우측 아래(bottom: 10px, right: 10px)에 “업” 버튼을 위치시킵니다 (position: fixed 속성 활용)
// 3. css 속성을 이용하여 버튼을 보이지 않게 합니다.
// 4. 스크롤을 위에서 100px 이상 내렸을 때 버튼이 나타나게 합니다.
// 5. 스크롤이 100px 이하로 다시 올라가면 버튼이 사라집니다.


const upBtn = document.querySelector(".top-btn")

window.addEventListener("scroll",()=>{
    if( scrollY < 100){
        upBtn.classList.add("show")
    }else {
        upBtn.classList.remove("show")
    }
})

upBtn.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
