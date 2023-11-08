let now = new Date();
const time = now.getHours();


let day = function(){
    if(time <= 10){
        return console.log("good morning");
    }else if(time > 10 && time < 18 ){
        return console.log("good afternoon");
    }else{ 
        return console.log("good evening");
    }}

day();

