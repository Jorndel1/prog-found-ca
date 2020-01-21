//Question (1)
var myString = "Hello";


//Question (2)
var person = {
    age: 25,
    height: 180
};

//Question (3)
var outOfStock = false;

if(outOfStock){
    console.log("In stock");
}
else{
    console.log("Out of stock");
}

//Question (4)
var numbers = [1,2,3,4,5];

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Question (5)
for(var i = 15; i <= 25; i++){
    console.log(i);
}

//Question (6)
for(var i = 15; i <= 25; i++){
    if(i === 20){
        console.log(i);
    }
}

//Question (7)
var objectArray = [{
        name: "Test",
        responsTime: 120,
        debug: false
    },{
        name: "Beta",
        responsTime: 360,
        debug: true
    }
];

for(var i = 0; i < objectArray.length; i++){
    console.log(objectArray[i].responsTime + " | " + objectArray[i].debug);
}

//Question (8)
function whatIDontLike(dontLike){
    console.log("I don't like " + dontLike);
}

whatIDontLike("giraffes");


//Question (9)
function substraction(first, secound){
    console.log(first - secound);
}

substraction(5, 2);

//Question (10)
var emptyArray = [];

function populateArray(value){
    emptyArray.push(value);
}

populateArray("-Cake-");
console.log(emptyArray[0]);