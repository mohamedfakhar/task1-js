

   var allProducts = document.querySelectorAll(".parent  li")
   var content = document.querySelector(".content")
   var btn = document.querySelector("#btn1")
   var salary = document.querySelector(".salary")
   var totalPrice = 0


   allProducts.forEach( function (item){
     item.onclick = function (){

         totalPrice +=   Number(item.getAttribute("price"))
         content.innerHTML  +=  item.textContent + " "

         if ( content.innerHTML != ""){
            btn.style.display = "block"
            btn.style.color = "white"
            btn.style.backgroundColor = "black"
            btn.style.width = "150px"
            btn.style.height = "40px"
         }
     }
   })

   btn.onclick = function (){
   salary.innerHTML="total: "+ totalPrice;

   }