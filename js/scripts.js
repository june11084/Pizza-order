//business logic

var small = 8.00;
var medium = 10.00;
var large = 12.00;

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.getPizzaPrice = function() {
   if(this.size === "small"){
     var price = small;
   } else if(this.size === "medium"){
     var price = medium;
   } else if(this.size === "large"){
     var price = large;
   }
   return price;
}



//UI logic

$(document).ready(function() {

  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    console.log(size)
    var topping = $("input:checkbox[name=topping]:checked").each(function(){
     var topping = $(this).val();
     console.log(topping)
   });


    var newOrder = new Pizza(size, topping);


    var result = newOrder.getPizzaPrice();
    $("#result").append("Your pizza cost: " + result);
  });
});
