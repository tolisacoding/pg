//navbar***********************************************************************************
//language switch
var c=document.querySelectorAll(".c");
var e=document.querySelectorAll(".e");
var ebtn=document.querySelector("#english");
var cbtn=document.querySelector("#chinese");
var hamburger=document.querySelector(".hamburger");
var navItemContainer=document.querySelector(".navItem-container");

ebtn.classList.add("active");
document.querySelector("#chinese").addEventListener("click", function(){
    for(var i=0; i<c.length; i++){
        c[i].style.display="block";
        e[i].style.display="none";
        cbtn.classList.add("active");
        ebtn.classList.remove("active");
    }
})
document.querySelector("#english").addEventListener("click", function(){
    for(var i=0; i<c.length; i++){
        c[i].style.display="none";
        e[i].style.display="block";
        ebtn.classList.add("active");
        cbtn.classList.remove("active");
    }
})
//navbar active seleted
var sections=document.querySelectorAll("section");
var navItems=document.querySelectorAll(".navItem");

var skills=document.querySelector(".skills");
var projects=document.querySelector(".projects");
var coverletter=document.querySelector(".coverletter");

function removeActive(){
	for(var i=0; i<navItems.length; i++){
		navItems[i].classList.remove("active");
	}
}
navItems[0].classList.add("active");

// navItem active on scroll
window.addEventListener("scroll",function(){
	for(var i=0; i<sections.length;i++){
		if(window.scrollY>=sections[i].offsetTop-1){
			removeActive();
			navItems[i].classList.add("active");
		}
	}
})
//navItem active on click	
function clickNav(n){
	removeActive();
	navItems[n].classList.add("active");
	sections[n].scrollIntoView({behavior:'smooth', block:"start"});
	document.querySelector(".game").play();
	
	if(window.getComputedStyle(hamburger).getPropertyValue("display")=="block"){
		navItemContainer.classList.remove("show");
		hamburger.classList.remove("active");
	}
}

//hambuerger
hamburger.addEventListener("click", function(){
	navItemContainer.classList.toggle("show");
	hamburger.classList.toggle("active");
})
//id photo slider*************************************************************************
var imgs=document.querySelectorAll(".slide-inner img");
var slideInner=document.querySelector(".slide-inner");
var current=0;
var slide=true;

function imgLoop(){
		imgs[current].classList.add("slideout");
		if(current<imgs.length-1){
			current++;
		} else {
			current=0;
		}	                                                                             

		var firstImg=document.querySelector(".slide-inner img:nth-of-type(1)");
		var ml=getComputedStyle(firstImg, null).getPropertyValue("margin-left");
		var width=getComputedStyle(firstImg, null).getPropertyValue("width");
		if(Math.abs(parseFloat(ml))>=parseFloat(width)){
			firstImg.classList.remove("slideout");
			slideInner.appendChild(firstImg);
		}
	t=setTimeout("imgLoop()",3000);
}
window.addEventListener("load", function(){
	setTimeout("imgLoop()",3000);
})
//slider autoplay stop when hover
slideInner.addEventListener("mouseover", function(){
	clearTimeout(t);
	
})
slideInner.addEventListener("mouseleave", function(){
	imgLoop();
})

// form sumbmit^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//initialize Firebase
 var config = {
    apiKey: "AIzaSyDiCsaX3HCEqJbtCHYrPDIdtrw9LTYEIek",
    authDomain: "contactform-c2a0c.firebaseapp.com",
    databaseURL: "https://contactform-c2a0c.firebaseio.com",
    projectId: "contactform-c2a0c",
    storageBucket: "contactform-c2a0c.appspot.com",
    messagingSenderId: "205647187411"
  };
   firebase.initializeApp(config);
   
//reference messages collection
var messagesRef=firebase.database().ref("messages");

//raddom number checking
var a=Math.floor(Math.random()*10+1);
var b=Math.floor(Math.random()*10+1);
var sum=document.querySelector(".sum");
document.querySelector(".a").innerHTML=a;
document.querySelector(".b").innerHTML=b;

// document.querySelector(".Submit").disabled = true;
var answer;
sum.addEventListener("keyup", function(){
	console.log(1);
	if(Number(document.querySelector(".sum").value)==a+b){
	console.log("correct");
	document.querySelector(".submit").style.background="var(--brown)";
	document.querySelector(".submit").style.color="#f2f2f2";
	answer=true;
} else {
	answer=false;
}
})
// function to get form value
document.querySelector("#contact-form").addEventListener("submit",function(e){
	e.preventDefault();//sent to html page by default
	if(answer==true){
	// get value
	var name=document.querySelector("#name").value;
	var phone=document.querySelector("#phone").value;
	var email=document.querySelector("#email").value;
	var message=document.querySelector("#message").value;
	
	//save message
	saveMessage(name, phone, email, message)
	// show alert
	document.querySelector(".alert-ok").style.display="block";
	document.querySelector(".alert-ng").style.display="none";
	setTimeout(function(){
		document.querySelector(".alert-ok").style.display="none";
	},3000)
	//clear form input
	document.querySelector("#contact-form").reset();		
	} else {
		document.querySelector(".alert-ng").style.display="block";
	}
})

function saveMessage(name, email, phone, message){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		name:name,
		phone:phone,
		email:email,
		message:message,
	})
}






//go to Top Btn^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var topBtn=document.querySelector("#topBtn");
window.onscroll = function() {showScrollBtn()};

function showScrollBtn() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else{
        topBtn.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
	document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    // var swiper = new Swiper('body', {
    //   slidesPerView: 1,
    // });
// var mediaElem=document.querySelector(".main2 .computer").contentWindow.document.getElementsByTagName("*");

// var x=window.matchMedia("(max-width:791px)");

// function resetCSSMedia(){
//     if(x.matches){
//         // mediaElem.removeAttribute();
//         removeRule();
//         // mediaElem.removeAttribute('style');
//     }
// }

// function removeRule() {
//     if(typeof window.CSSMediaRule !== "function") 
//         return false; //Your browser doesn't support media query feature

//     var s = document.styleSheets, r,
//         i, j, k;

//     if(!s) return false; //no style sheets found

//     // walk throuth css sheets
//     for(i=0; i<s.length; i++) {
//         // get all rules
//         r = s[i].cssRules; 
//         if(!r) continue;

//         for(j=0; j<r.length; j++) {
//             //If there's a rule for media query
//             if(r[j] instanceof CSSMediaRule &&
//                     r[j].media.mediaText == "only screen and (min-width: 600px)") {
//                 for(k=0; k<r[j].cssRules.length; k++) {
//                     // remove all rules of it
//                     r[j].deleteRule(r[j].cssRules[k]);
//                 }
//                 return true;
//             }
//         }
//     }
// }
// window.addEventListener("load", function(){
//     removeRule();
//     resetCSSMedia();
// })
// removeRule();

