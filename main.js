

// $('.submit').click(function(e){
// 	var quotebank = [];
// 	e.preventDefault();
// 	console.log('clicked');
// 	console.log($('.Quote').val());
// 	var newQuote = ($('.text').val());
// 	var newAuthor = ($('.author').val());
// 	console.log(newQuote);
// 	$('.userQuotes').append('"'+ newQuote + '"' );
// 	$('.userQuotes').append(" -" + newAuthor +" <br>");
// 	$(".Quote, .Author").val('');



// });




$('.submit').click(function(e){
	var quotebank = [];
	e.preventDefault();
	var Quote = function(text, author){
		 text = text || 'no quote text';
  		author = author || 'anonymous';

	  // Longer, but means more control:
	  if(text === undefined){
	    text = 'no quote text';
	  }
	  if(author === undefined){
	    author = 'anonymous';
	  }
		this.text = text;
		this.author = author;
	};

	Quote.prototype.create = function(){
		this.el = $ ('<li>')
		.text('"' + this.text + '"' + ' - ' + this.author);
	return this.el;
	};
	

	var userQuote = new Quote(
		($('.text').val()) ,($('.author').val())

		);
	console.log(userQuote.text, userQuote.author);

	
	console.log(userQuote.create());

	$(userQuote.create()).addClass('created');
	$('.userQuotes').prepend(userQuote.create () );

	

	$(".text, .author").val('');
});


///pull in from oop- add create event