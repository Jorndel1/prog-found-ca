//Question (1)
for(var i = 15; i <= 25; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Question (2)
function innerFunction(){
    console.log("I am a function");
}


function outerFunction(param){
    param();
}

outerFunction(innerFunction);