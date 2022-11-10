
let butn3 = document.querySelector("#butn3");
let w2d1coverd1 = document.querySelector("#w2d1coverd1");
let w2d1coverd2 = document.querySelector("#w2d1coverd2");
let w2d2coverd1 = document.querySelector("#w2d2coverd1");
let butn3img1 = document.querySelector("#butn3img1");


let w3d1img1 = document.querySelector("#w3d1img1");
let w3d1img3 = document.querySelector("#w3d1img3");

let btnscrolltop = document.querySelector("#btnscrolltop");


window.onscroll = function scrollfun1(){
     if(window.scrollY > 100){
     	w3d1img1.style.transform = "translateY(-40px)";
     	w3d1img3.style.transform = "translateY(40px)";
     }
     if(window.scrollY > 200){
     	w3d1img1.style.transform = "translateY(-20px)";
     	w3d1img3.style.transform = "translateY(20px)";
     	btnscrolltop.style.opacity = "1";
     }else{
     	btnscrolltop.style.opacity = "0";
     }
     if(window.scrollY > 300){
     	w3d1img1.style.transform = "translateY(5px)";
     	w3d1img3.style.transform = "translateY(-5px)";
     }
     if(window.scrollY > 400){
     	w3d1img1.style.transform = "translateY(25px)";
     	w3d1img3.style.transform = "translateY(-25px)";
     }
      if(window.scrollY > 500){
     	w3d1img1.style.transform = "translateY(45px)";
     	w3d1img3.style.transform = "translateY(-45px)";
     }
     if(window.scrollY > 600){
     	w3d1img1.style.transform = "translateY(65px)";
     	w3d1img3.style.transform = "translateY(-65px)";
     }


	if(window.scrollY > 20){
		w2d1coverd1.style.left = "0";
		w2d1coverd2.style.left = "0";
		w2d2coverd1.style.top = "0";
		butn3.style.height = "70px";
		butn3img1.src = "https://slidesigma.com/themes/html/fattpizza//assets/images/logo-2.png"; 
	}else{
		w2d1coverd1.style.left = "100%";
		w2d1coverd2.style.left = "-100%";
		w2d2coverd1.style.top = "-100%";
		butn3.style.height = "140px";
		 butn3img1.src = "https://slidesigma.com/themes/html/fattpizza//assets/images/logo-1.png";
	}

	console.log(window.scrollY);
}




function scrolltopfun1(){
	$('html,body').animate({scrollTop:0},'2000')
}















let w4slidediv = document.querySelector("#w4-1")
let w4slidein =  -25;
let w4d1slidein = 400;

let w4slidedivin = 0;





function w4slideinfinite(){
  w4slidediv.style.transform = `translateX(${w4slidein}%)`
  w4slidein = w4slidein - 25;

  if(w4slidedivin === 0){
     w4slidedivin = 1;
  }else if(w4slidedivin === 1){
  	document.querySelector("#w4slided1").style.transform = `translateX(${w4d1slidein}%)`;
  	w4slidedivin = 2;
  }else if(w4slidedivin === 2){
  	document.querySelector("#w4slided2").style.transform = `translateX(${w4d1slidein}%)`;
  	w4slidedivin = 3;
  }else if(w4slidedivin === 3){
  	document.querySelector("#w4slided3").style.transform = `translateX(${w4d1slidein}%)`;
  	w4slidedivin = 4;
  }else if(w4slidedivin === 4){
  	document.querySelector("#w4slided4").style.transform = `translateX(${w4d1slidein}%)`;
  	w4d1slidein += 400; 
  	w4slidedivin = 1;
  }


}


setInterval(w4slideinfinite,3000);











let btnapetizer = document.querySelector("#btnapetizer");
let btnaptimg1 = document.querySelector("#btnaptimg1");
let btnapetizerdiv = document.querySelector("#btnapetizerdiv");
let apetizerdivw5 = document.querySelector("#apetizerdivw5");

let btndesert = document.querySelector("#btndesert");
let btndesertimg1 = document.querySelector("#btndesertimg1");
let btndesertdiv = document.querySelector("#btndesertdiv");
let desertdivw5 = document.querySelector("#desertdivw5");

let btndishes = document.querySelector("#btndishes");
let btndishesimg1 = document.querySelector("#btndishesimg1");
let btndishesdiv = document.querySelector("#btndishesdiv");
let dishesdivw5 = document.querySelector("#dishesdivw5");

let btnkids = document.querySelector("#btnkids");
let btnkidsimg1 = document.querySelector("#btnkidsimg1");
let btnkidsdiv = document.querySelector("#btnkidsdiv");
let kidsdivw5 = document.querySelector("#kidsdivw5");


btnapetizer.addEventListener("click",() => {
     btnapetizer.style.color = "white";
     btnaptimg1.style.opacity = "1";
     btnapetizerdiv.style.top = "0";
     apetizerdivw5.style.opacity = "1";

     btndesert.style.color = "#3d322c";
     btndesertimg1.style.opacity = "0";
     btndesertdiv.style.top = "100%";
     desertdivw5.style.opacity = "0";

     btndishes.style.color = "#3d322c";
     btndishesimg1.style.opacity = "0";
     btndishesdiv.style.top = "100%";
     dishesdivw5.style.opacity = "0";

     btnkids.style.color = "#3d322c";
     btnkidsimg1.style.opacity = "0";
     btnkidsdiv.style.top = "100%";
     kidsdivw5.style.opacity = "0";


});


btndesert.addEventListener("click",() => {
     btndesert.style.color = "white";
     btndesertimg1.style.opacity = "1";
     btndesertdiv.style.top = "0";
     desertdivw5.style.opacity = "1";

     btnapetizer.style.color = "#3d322c";
     btnaptimg1.style.opacity = "0";
     btnapetizerdiv.style.top = "100%";
     apetizerdivw5.style.opacity = "0";

     btndishes.style.color = "#3d322c";
     btndishesimg1.style.opacity = "0";
     btndishesdiv.style.top = "100%";
     dishesdivw5.style.opacity = "0";

     btnkids.style.color = "#3d322c";
     btnkidsimg1.style.opacity = "0";
     btnkidsdiv.style.top = "100%";
     kidsdivw5.style.opacity = "0";


});


btndishes.addEventListener("click",() => {
	btndishes.style.color = "white";
     btndishesimg1.style.opacity = "1";
     btndishesdiv.style.top = "0";
     dishesdivw5.style.opacity = "1";

     btnapetizer.style.color = "#3d322c";
     btnaptimg1.style.opacity = "0";
     btnapetizerdiv.style.top = "100%";
     apetizerdivw5.style.opacity = "0";


     btndesert.style.color = "#3d322c";
     btndesertimg1.style.opacity = "0";
     btndesertdiv.style.top = "100%";
     desertdivw5.style.opacity = "0";

     btnkids.style.color = "#3d322c";
     btnkidsimg1.style.opacity = "0";
     btnkidsdiv.style.top = "100%";
     kidsdivw5.style.opacity = "0";


});

btnkids.addEventListener("click",() => {
	btnkids.style.color = "white";
     btnkidsimg1.style.opacity = "1";
     btnkidsdiv.style.top = "0";
     kidsdivw5.style.opacity = "1";


	btndishes.style.color = "#3d322c";
     btndishesimg1.style.opacity = "0";
     btndishesdiv.style.top = "100%";
     dishesdivw5.style.opacity = "0";

     btnapetizer.style.color = "#3d322c";
     btnaptimg1.style.opacity = "0";
     btnapetizerdiv.style.top = "100%";
     apetizerdivw5.style.opacity = "0";


     btndesert.style.color = "#3d322c";
     btndesertimg1.style.opacity = "0";
     btndesertdiv.style.top = "100%";
     desertdivw5.style.opacity = "0";

     


});



let w8slidediv = document.querySelector("#w8slidediv");
let w8slidein = -12.5;
let w8d1slidein = 0;
let w8div1slidein = 800;


function w8slideinfinite(){
	w8slidediv.style.transform = `translateX(${w8slidein}%)`;
	w8slidein -= 12.5;

	if(w8d1slidein === 0){
        w8d1slidein = 1;
	}else if(w8d1slidein === 1){
		document.querySelector("#w8slided1").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 2;
	}else if(w8d1slidein === 2){
		document.querySelector("#w8slided2").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 3;
	}else if(w8d1slidein === 3){
		document.querySelector("#w8slided3").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 4;
	}else if(w8d1slidein === 4){
		document.querySelector("#w8slided4").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 5;
	}else if(w8d1slidein === 5){
		document.querySelector("#w8slided5").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 6;
	}else if(w8d1slidein === 6){
		document.querySelector("#w8slided6").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 7;
	}else if(w8d1slidein === 7){
		document.querySelector("#w8slided7").style.transform = `translateX(${w8div1slidein}%)`;
		w8d1slidein = 8;
	}else if(w8d1slidein === 8){
		document.querySelector("#w8slided8").style.transform = `translateX(${w8div1slidein}%)`;
		w8div1slidein += 800;
		w8d1slidein = 1;
	}        
}


setInterval(w8slideinfinite,2600)















let w9slideimg = document.querySelector("#w9slideimg");
let w9slideimgin = 0;

function w9slideimgfun1(){
	setInterval(function () {
	if(w9slideimgin === 0){
		w9slideimg.src = "https://slidesigma.com/themes/html/fattpizza//assets/images/dining-food-1.png";
		w9slideimgin = 1;
	}
	else if(w9slideimgin === 1){
		w9slideimg.src = "https://slidesigma.com/themes/html/fattpizza/assets/images/dining-food-2.png";
		w9slideimgin = 2;
	}
	else if(w9slideimgin === 2){
		w9slideimg.src = "https://slidesigma.com/themes/html/fattpizza//assets/images/plate-contents.png";
		w9slideimgin = 0;
	}


	},2000);
}

w9slideimgfun1();







let w10slidediv = document.querySelector("#w10slidediv");
let w10slidein = -16.6666667;
let w10silded1in = 0;
let w10div1in = 600;


function w10slideinfinite(){
	w10slidediv.style.transform = `translateX(${w10slidein}%)`;
	w10slidein -= 16.6666667;
	if(w10silded1in === 0){
		w10silded1in = 1;
	}else if(w10silded1in === 1){
		document.querySelector("#w10slided1").style.transform = `translateX(${w10div1in}%)`;
		w10silded1in = 2;
	}else if(w10silded1in === 2){
		document.querySelector("#w10slided2").style.transform = `translateX(${w10div1in}%)`;
		w10silded1in = 3;
	}else if(w10silded1in === 3){
		document.querySelector("#w10slided3").style.transform = `translateX(${w10div1in}%)`;
		w10silded1in = 4;
	}else if(w10silded1in === 4){
		document.querySelector("#w10slided4").style.transform = `translateX(${w10div1in}%)`;
		w10silded1in = 5;
	}else if(w10silded1in === 5){
		document.querySelector("#w10slided5").style.transform = `translateX(${w10div1in}%)`;
		w10silded1in = 6;
	}else if(w10silded1in === 6){
		document.querySelector("#w10slided6").style.transform = `translateX(${w10div1in}%)`;
		w10div1in += 600;
		w10silded1in = 1;
	}
}


setInterval(w10slideinfinite,2000);









let boxd5spnprev = document.querySelector("#boxd5spnprev");
let boxd5spnnext = document.querySelector("#boxd5spnnext");
let wineimgdiv = document.querySelector("#wineimgdiv");
let wineimgin = 0;


boxd5spnprev.addEventListener("click",() => {
 if(wineimgin === 0){
 	wineimgdiv.style.transform = "translateX(-33.3333333%)";wineimgin = 1;
 }
 else if(wineimgin === 1){
 	wineimgdiv.style.transform = "translateX(-66.6666666%)";wineimgin = 2;
 }
  })


boxd5spnnext.addEventListener("click",() => {
 if(wineimgin === 2){
 	wineimgdiv.style.transform = "translateX(-33.3333333%)";wineimgin = 1;
 }
 else if(wineimgin === 1){
 	wineimgdiv.style.transform = "translateX(0)";wineimgin = 0;
 }
  })






let menubardiv = document.querySelector("#menubardiv");
let butnmenu = document.querySelector("#butnmenu");
let menuclosebtn = document.querySelector("#menuclosebtn");
let barposdiv = document.querySelector("#barposdiv");




butnmenu.addEventListener("click",() => {
	menubardiv.style.top = "0";menubardiv.style.opacity = "1";menubardiv.style.zIndex = "200";barposdiv.style.zIndex = "100"
});
menuclosebtn.addEventListener("click",() => {
	menubardiv.style.top = "-100%";menubardiv.style.opacity = "0";menubardiv.style.zIndex = "100";barposdiv.style.zIndex = "200"
});






let mediabtn1 = document.querySelector("#mediabtn1");
let mediabarspndiv = document.querySelector("#mediabarspndiv");
let mediabarspn1 = document.querySelector("#mediabarspn1");
let mediabarspn2 = document.querySelector("#mediabarspn2");
let mediabarspn3 = document.querySelector("#mediabarspn3");
let mediabarspn4 = document.querySelector("#mediabarspn4");
let mediabarbtndivs = document.querySelector("#mediabarbtndivs");
let maedibarin = 0;


mediabtn1.addEventListener("click",() => {
	if(maedibarin === 0){
		mediabarspndiv.style.transform = "rotate(90deg)";
		mediabarspn1.style.opacity = "0";mediabarspn2.style.opacity = "0";
		mediabarspn3.style.opacity = "0";mediabarspn4.style.opacity = "0";

		mediabarbtndivs.style.top = "60px";mediabarbtndivs.style.opacity = "1";
		maedibarin = 1;
	}
	else if(maedibarin === 1){
		mediabarspndiv.style.transform = "rotate(0deg)";
		mediabarspn1.style.opacity = "1";mediabarspn2.style.opacity = "1";
		mediabarspn3.style.opacity = "1";mediabarspn4.style.opacity = "1";

		mediabarbtndivs.style.top = "-100%";mediabarbtndivs.style.opacity = "0";
		maedibarin = 0;
	}

});






