var price =  document.querySelectorAll(" .header .container .header-head ul li"); 

price[0].onclick = function () {
    
    "use strict"; 
     
    var y = window.scrollY,
        animation; 
    
    if(y < 1852) {
        
       animation = setInterval(function(){
                if( y > 1852) {
               clearInterval(animation);
           }
        
           y+=10; 
           window.scrollTo(0,y);
         
       },10);
        
        
    }
        window.scrollTo(0,1852);


   
                
}



   price[1].onclick = function () {
    
    "use strict"; 
     
    var y = window.scrollY,
        animation; 
    
    if(y < 2612) {
        
       animation = setInterval(function(){
           if( y > 2612) {
               clearInterval(animation);
           }
        
           y+=10; 
           window.scrollTo(0,y);
              
       },10);
    }
           window.scrollTo(0,2612);

       
                
}

   
   
   
var custom = document.getElementById("a");
    

window.onscroll = function() {
    
    if(window.scrollY > 100) {
        
        custom.style.display="block";
    }
    else{
                custom.style.display="none";

    }
}

var home = document.querySelectorAll(".custom ul li");

home[2].onclick = function(){
    
            
    var y = scrollY,
        animation = setInterval(function(){
            
            y-=10; 
            window.scrollTo(0,y);
            if(y<=0){
                clearInterval(animation);
            }
        },10); 
   
    
  

}

home[1].onclick = function(){
        var y = scrollY,
            animation;
    
    if(y<3061){
        
        animation = setInterval(function(){
             if(y>3061){
                clearInterval(animation);
            }
            y +=10; 
            window.scrollTo(0,y);
           
        },10)
    }
    window.scrollTo(0,3061);
}


