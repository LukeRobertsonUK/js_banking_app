// Document is ready
$(function() {

  var balanceOne = 0;
  var balanceTwo = 0;

  function depositMoney(account, amount){
    switch(account) {
      case 'one':
        balanceOne += amount;
        $("#placeholder_one").remove();
        $("#balance_one").append("<h2 id='placeholder_one'> $" + balanceOne + "</h2>");
      break;
      case 'two':
        balanceTwo += amount;
        $("#placeholder_two").remove();
        $("#balance_two").append("<h2 id='placeholder_two'> $" + balanceTwo + "</h2>");
      break;
    };
  };

  function withdrawMoney(account, amount){
    switch(account) {
      case 'one':
        balanceOne -= amount;
        $("#placeholder_one").remove();
        $("#balance_one").append("<h2 id='placeholder_one'> $" + balanceOne + "</h2>");
        if(balanceOne == 0){
          $("#placeholder_one").addClass("zero");
        };
      break;
      case 'two':
        balanceTwo -= amount;
        $("#placeholder_two").remove();
        $("#balance_two").append("<h2 id='placeholder_two'> $" + balanceTwo + "</h2>");
         if(balanceTwo == 0){
          $("#placeholder_two").addClass("zero");
        };
      break;
    };
  };

 $('#deposit_one').on('click', function(e){
    depositMoney('one', parseInt($('#amount_one').val()));
  });

  $('#deposit_two').on('click', function(e){
    depositMoney('two', parseInt($('#amount_two').val()));
  });

 $('#withdraw_one').on('click', function(e){
    var amount = $('#amount_one').val()
    if(amount > (balanceOne+balanceTwo)){
    } else {
      if(amount > balanceOne){
        withdrawMoney('two', (amount - balanceOne));
        withdrawMoney('one', balanceOne);
      } else {
        withdrawMoney('one', amount);
      };
    };
  });

 $('#withdraw_two').on('click', function(e){
    var amount = $('#amount_two').val()
    if(amount > (balanceOne+balanceTwo)){
    } else {
      if(amount > balanceTwo){
        withdrawMoney('one', (amount - balanceTwo));
        withdrawMoney('two', balanceTwo);
      } else {
        withdrawMoney('two', amount);
      };
    };
  });

});