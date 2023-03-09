
// animation section message
function sectionMessage(){
  let message = document.querySelectorAll(".message");
  let messageLineOne = document.querySelectorAll(".message .line.one");
  let messageLineTwo = document.querySelectorAll(".message .line.two");
  let messageMess = document.querySelectorAll(".message .mess");
  message.forEach((mess, i)=>{
    messageLineOne[i].style.left = "-100%";
    messageLineTwo[i].style.right = "-100%";
    messageLineOne[i].style.opacity = "0";
    messageLineTwo[i].style.opacity = "0";
    window.addEventListener("scroll", ()=>{
      if( window.scrollY >= mess.offsetTop - 600) {
        messageLineOne[i].style.left = "0"
        messageLineOne[i].style.transition = "0.5s"
        messageLineTwo[i].style.right = "0"
        messageLineTwo[i].style.transition = "0.5s"
        messageLineOne[i].style.opacity = "1";
        messageLineTwo[i].style.opacity = "1";
      }else {
        messageLineOne[i].style.left = "-100%";
        messageLineTwo[i].style.right = "-100%";
        messageLineOne[i].style.opacity = "0";
        messageLineTwo[i].style.opacity = "0";
      }
    })
    animation(mess, messageMess[i], "y", "t", "0s")
  })
}sectionMessage();

// animation section collagen
function sectionCollagen(){
  let collagen = document.querySelector(".collagen");
  let collagenImg = document.querySelector(".collagen .image");
  let collagenH2 = document.querySelector(".collagen h2");
  let collagenPOne = document.querySelector(".collagen p:first-of-type");
  let collagenPTwo = document.querySelector(".collagen p:last-of-type");
  let collagenA = document.querySelector(".collagen a");
  animation(collagen, collagenImg, "x", "r", "0s")
  animation(collagen, collagenH2, "x", "l", "0s")
  animation(collagen, collagenPOne, "y", "t", "0.3s")
  animation(collagen, collagenPTwo, "y", "t", "0.4s")
  animation(collagen, collagenA, "y", "b", "0s")
}sectionCollagen();

// aniamtion section we-message
function sectionWeMessage(){
  let weMess = document.querySelector(".we-message");
  let weMessH2 = document.querySelector(".we-message h2");
  let weMessPOne = document.querySelector(".we-message p:first-of-type");
  let weMessPTwo = document.querySelector(".we-message p:last-of-type");
  animation(weMess, weMessH2, "y", "t", "0s");
  animation(weMess, weMessPOne, "y", "b", "0s");
  animation(weMess, weMessPTwo, "y", "b", "0.3s");
}sectionWeMessage();

// aniamtion section desgined
function sectionDesgined(){
  let designed = document.querySelector(".designed");
  let designedImg = document.querySelector(".designed img");
  let designedH5 = document.querySelector(".designed h5");
  let designedP = document.querySelector(".designed p");
  animation(designed, designedImg, "y", "t", "0.1s");
  animation(designed, designedH5, "x", "l", "0.5s");
  animation(designed, designedP, "y", "b", "0.7s");
}sectionDesgined();

// animation section option
function sectionOption() {
  let option = document.querySelector(".option");
  let span = document.querySelectorAll(".option div span");
  span.forEach((s, i)=>{
    animation(option, s , "x", "l", `0.${i}s`)
  })
}sectionOption();

// animation section change 
function sectionChange(){
  let change = document.querySelector(".change");
  let changeImg = document.querySelector(".change .content img");
  let changeP = document.querySelector(".change .content p");
  animation(change, changeImg, "y", "t", "0s");
  animation(change, changeP, "x", "l", "0.3s");
}sectionChange ();

// animation section product
function sectionProduct() {
  let section = document.querySelector(".product");
  let sectionImg = document.querySelector(".product img");
  sectionImg.style.cssText = `left: 0;opacity:0;`
  window.addEventListener("scroll",()=>{
    if ( window.scrollY >= section.offsetTop - 600 ) {
      sectionImg.style.cssText = `left: 50%; transition:1s ;opacity:1;`
    } else {
      sectionImg.style.cssText = `left: 0; transition:1s ;opacity:0;`
    }
  })
}sectionProduct();


// animation section option
function animation(sec, ele, type, direc, delay) {
  if (type === "x") {
    if (direc === "l") {
      ele.style.cssText = `transform:translateX(-100px);opacity:0;`
      window.addEventListener("scroll",()=>{
        if ( window.scrollY >= sec.offsetTop - 600 ) {
          ele.style.cssText = `transform:translateX(0px); transition:1s ${delay} ;opacity:1;`
        } else {
          ele.style.cssText = `transform:translateX(-100px); transition:1s ${delay} ;opacity:0;`
        }
      })
    }else if (direc === "r") {
      ele.style.cssText = `transform:translateX(100px);opacity:0;`
      window.addEventListener("scroll",()=>{
        if ( window.scrollY >= sec.offsetTop - 600 ) {
          ele.style.cssText = `transform:translateX(0px); transition:1s  ${delay} ;opacity:1;`
        } else {
          ele.style.cssText = `transform:translateX(100px); transition:1s ${delay} ;opacity:0;`
        }
      })
    }
  }else if (type === "y") {
    if (direc === "t") {
      ele.style.cssText = `transform:translateY(-100px);opacity:0;`
      window.addEventListener("scroll",()=>{
        if ( window.scrollY >= sec.offsetTop - 600 ) {
          ele.style.cssText = `transform:translateY(0px); transition:1s  ${delay} ;opacity:1;`
        } else {
          ele.style.cssText = `transform:translateY(-100px); transition:1s ${delay} ;opacity:0;`
        }
      })
    }else if (direc === "b") {
      ele.style.cssText = `transform:translateY(100px);opacity:0;`
      window.addEventListener("scroll",()=>{
        if ( window.scrollY >= sec.offsetTop - 600 ) {
          ele.style.cssText = `transform:translateY(0px); transition:1s  ${delay} ;opacity:1;`
        } else {
          ele.style.cssText = `transform:translateY(100px); transition:1s ${delay} ;opacity:0;`
        }
      })
    }
  }
}