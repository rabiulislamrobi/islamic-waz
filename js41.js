
// tutorial 41
// programme41.1

// function start(){
//     var myStart=document.querySelector("#heading1");
//     myStart.classList.add("heading1");
// }
// function remove(){
//     var myRemove=document.querySelector("#heading1");
//     myRemove.classList.remove("heading1");

// }
// tutorial 42 
// programme42.1

// var buttonSelector=document.querySelector("button");
// buttonSelector.addEventListener("click",myFuction);
// function myFuction(){
//     alert("hello bangladesh");
// }
// programme42.2

// var seltector=document.querySelector("h1");
// seltector.addEventListener("mouseover" , function(){
//     seltector.classList.add("heading2");
    

// });
// seltector.addEventListener("mouseout" , function(){
//     seltector.classList.remove("heading2");
    

// });

// programme43.2 
// without for loop
// var selector=document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + "is clicked";
// });
// var selector=document.querySelectorAll(".myButton")[1].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + "is clicked";
// });
// var selector=document.querySelectorAll(".myButton")[2].addEventListener("click",function(){
//     var text=this.innerHTML;
//     document.querySelector("h1").innerHTML=text + "is clicked";
// });


// programme43.2 with for loop; 

// var len=document.querySelectorAll(".myButton");
// for(var i=0;i<3;i=i+1){
//     var selector=document.querySelectorAll(".myButton")[i];
//     selector.addEventListener("click",function(){
//         var text=this.innerHTML;
//         document.querySelector("h1").innerHTML=text+"is clicked now";
//     })
// };


// programme44.1

for(var i=0;i<=3;i++)
{
    document.querySelectorAll(".button")[i].addEventListener("click",function(){

    var text=this.innerHTML;
    console.log(text);
    newaudio(text);

});
}
function newaudio(text){
    
    switch(text){
        case "waz1":
            var audio=new Audio("islamicwaz/1.mp3");
            audio.play();
            break;
        case "waz2":
            var audio=new Audio("islamicwaz/2.mp3");
            audio.play();
            break;
        case "waz3":
            var audio=new Audio("islamicwaz/3.mp3");
            audio.play();
            break;
        case "waz4":
            var audio=new Audio("islamicwaz/4.mp3");
            audio.play();
            break;
        
    }
}
