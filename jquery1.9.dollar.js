/*!
 * jQuery plugin to changing numbers to currency format
 * Version 1.0.0
 * Original author: @tbwiii
 * Licensed under the MIT license
 *
 * 
 * $(selector).dollar([number][, options])
 * number if you want to replace what's inside your selected node - leave blank if you want to manipulate what's in the node
 * options for commas and currency symbol. "{ comma : true/false, symbol : true/false/€/£ }" (defaults are true)
/*/ 


;(function( $ ){

  $.fn.dollar = function(number, format) {

  	var $this = this;

  	if (!number || typeof(number) === 'object') {
  		//incase just parameters are entered and not a number
  		var format = number;
  		number = $this.html();
  		console.log(format)
  	}

  	
  	var format = format || {},
  		commas = format.commas || true,
  		symbol = format.symbol || "$";

 	number = parseFloat(number, 10)
 	.toFixed(2);

 	if (commas) {

 		var count = 0;
 		var numArr = number.toString().split("");

 		var len = numArr.length - 6; 

 		for (var i = len; i > 0; i= i - 3) {
 			numArr.splice(i,0,",");

 		}

 		number = numArr.join("");
 		
 	}

 	if (typeof symbol === 'string') {
 		number = symbol + number;
 	
 	}

 	$this.html(number);
 
  };

})( jQuery );
