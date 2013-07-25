// Document is ready
$(function() {

  var balanceOne = 0;
  var balanceTwo = 0;

  $('#deposit_one').on('click', function(e){
    depositMoney('one', $('#amount_one').val());
    $("#placeholder_one").remove();
    $("#balance_one").append("<p id='placeholder_one'> $" + balanceOne + "</p>");
  });

  $('#deposit_two').on('click', function(e){
    depositMoney('two', $('#amount_two').val());
    $("#placeholder_two").remove();
    $("#balance_two").append("<p id='placeholder_two'> $" + balanceTwo + "</p>");
  });

  function depositMoney(account, amount){
    switch(account) {
      case 'one':
        balanceOne += parseInt(amount);
      break;
      case 'two':
        balanceTwo += parseInt(amount);
      break;
    };
  };


 $('#withdraw_one').on('click', function(e){
    withdrawMoney('one', $('#amount_one').val());
    $("#placeholder_one").remove();
    $("#balance_one").append("<p id='placeholder_one'> $" + balanceOne + "</p>");
  });

  $('#withdraw_two').on('click', function(e){
    withdrawMoney('two', $('#amount_two').val())
    $("#placeholder_two").remove();
    $("#balance_two").append("<p id='placeholder_two'> $" + balanceTwo + "</p>");
  });

  function withdrawMoney(account, amount){
    switch(account) {
      case 'one':
        if(parseInt(amount) <= balanceOne){
          balanceOne -= parseInt(amount);
        };
      break;
      case 'two':
        if(parseInt(amount) <= balanceTwo){
          balanceTwo -= parseInt(amount);
        };
      break;
    };
  };

});