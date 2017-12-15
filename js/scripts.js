//business logic

var totalPrice = 0.00;

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.getPizzaPrice = function() {
   if(this.size === "Small"){
     var price = 8.00;
   } else if(this.size === "Medium"){
     var price = 10.00;
   } else if(this.size === "Large"){
     var price = 12.00;
   }
   if(this.topping.toString().match(/(?=.*Cheese)/)){
     price += 1;
   }
   if(this.topping.toString().match(/(?=.*Pepperoni)/)){
     price += 1;
   }
   if(this.topping.toString().match(/(?=.*Mushrooms)/)){
     price += 1.5;
   }
   if(this.topping.toString().match(/(?=.*Sausage)/)){
     price += 2;
   }
   if(this.topping.toString().match(/(?=.*Bacon)/)){
     price += 2;
   }
   totalPrice += price;
   return ("$" + price);
}

Pizza.prototype.printList = function() {
  return this.size + ", " + this.topping;
};


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var topping = [];
    var size = $("#size").val();
    console.log(size)
    $("input:checkbox[name=topping]:checked").each(function(){
     var toppings = $(this).val();
     topping.push(toppings);
     console.log(topping)
   });

    var newOrder = new Pizza(size, topping);

    var price = newOrder.getPizzaPrice();
    $("ol#orders").append("<li><span class='order'>" + newOrder.printList() + "</span></li>");
    $("#total").text("$" + totalPrice);

    $(".order").last().click(function() {
      $("#show-details").show();
      $(".size").text(newOrder.size);
      $(".toppings").text(newOrder.topping);
      $(".cost").text(price);
    });
  });
});
