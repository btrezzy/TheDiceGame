function random() {
    var x=(Math.random());
    
    x=Math.round(x*10);
  
    if(x>6){
      x=x-6;
    }
    if(x==0) {
      x++;
    }
  
      return x;
      
   }
   
   var a=random();
   var b=random();


  

   if(a>b) {
   document.querySelector("h1").innerText="Player 1 wins 🚩";
   }
   else if(a===b) {
    document.querySelector("h1").innerText="Draw";
   }
   else {
    document.querySelector("h1").innerText="Player 2 wins 🚩";
   }
  
   if(a===1) 
   document.querySelector(".img1").src="dice1.png";
  
   if(a===2) 
   document.querySelector(".img1").src="dice2.png";
  
   if(a===3) 
   document.querySelector(".img1").src="dice3.png";
   
   if(a===4) 
   document.querySelector(".img1").src="dice4.png";
   
   if(a==5) 
   document.querySelector(".img1").src="dice5.png";
   
   if(a==6) 
   document.querySelector(".img1").src="dice6.png";
  
  
   if(b===1) 
   document.querySelector(".img2").src="dice1.png";
  
   if(b===2) 
   document.querySelector(".img2").src="dice2.png";
  
   if(b===3) 
   document.querySelector(".img2").src="dice3.png";
   
   if(b===4) 
   document.querySelector(".img2").src="dice4.png";
   
   if(b===5) 
   document.querySelector(".img2").src="dice5.png";
   
   if(b===6) 
   document.querySelector(".img2").src="dice6.png";
  
  
  
