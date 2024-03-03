let data=[
    {
        name:"Heidi",
        gender:"girl"
    },
    {
        name:"Rhys",
        gender:"boy"
    },
    {
        name:"Ryan",
        gender:"boy"
    },
    {
        name:"Jack",
        gender:"boy"
    },
    {
        name:"Maya",
        gender:"girl"
    }
];
function init(){ //搭配網頁初始化狀態

//選取網頁中ul class="friends"
    const friends = document.querySelector(".friends");

//設計一個空字串
    let string = "";

//用forEach去做陣列資料處理   
    data.forEach(function(value){
        console.log(`<li>${value.name} is a ${value.gender}.</li>`);
        string+=`<li>${value.name} is a ${value.gender}.</li>`;
    });

//使用innerHTML，將處理完的字串資料放到class="friends"(ul)中
    friends.innerHTML = string;    
}
init();

//選取網頁中class＝"filter"
const filter = document.querySelector(".filter");

//為按鈕設計監聽效果，並設計undifined區域
filter.addEventListener("click", function(e){
   if(e.target.value==undefined){
    console.log("nono");
    return;
}
let string="";
data.forEach(function(value){
    if(e.target.value=="All"){
        string+=`<li>${value.name} is a ${value.gender}.</li>`}
    if(e.target.value==value.gender){
    string+=`<li>${value.name} is a ${value.gender}.</li>`}
})
const friends = document.querySelector(".friends");
friends.innerHTML = string; 
})

const friendName = document.querySelector(".Name");
const friendGender = document.querySelector(".Gender");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){
let obj = {};
obj.name = friendName.value;
obj.gender = friendGender.value;
console.log(obj);
data.push(obj);
init();
})