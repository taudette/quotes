
// // appends stars to qutoes
// $('#rating').clone().appendTo('li');
// $('li').append('<span class="quoteRank">1</span> <span>Stars!</span');

// $('.submit').click(function(e){
// 	var quotebank = [];
// 	e.preventDefault();
// 	var Quote = function(text, author, rating){
// 		text = text || 'You should probably enter a quote.';
//   		author = author || 'anonymous';

// 	  // Longer, but means more control:
// 		  if(text === undefined){
// 		    text = 'You should probably enter a quote.';
// 		  }
// 		  if(author === undefined){
// 		    author = 'anonymous';
// 		  }
// 			this.text = text;
// 			this.author = author;
// 			this.rating = 1;
// 	};



// Quote.prototype.create = function(){
// 	this.el = $ ('<li>')
// 	.html('"' + this.text + '"' + ' ' + '<span class="a-click">' + '- ' + this.author + '</span>' );
// 	return this.el;
// };

// var userQuote = new Quote(
// 	($('.text').val()) ,($('.author').val())
// 	);


// // //sorting quotes by rating
// // need to use delegated events and select container
// // without closest clicks were happening on the input, needed to go back out until it finds match, "closest"
// $('.userQuotes li').on('click','input',function(){
// 	$(this).closest('li').find('.quoteRank').text(this.value);
// 	console.log(this.value);	
	
// });









// $(userQuote.create()).addClass('created');
// $('.userQuotes').prepend(userQuote.create () );

// //clears form after submitting
// $(".text, .author").val('');

// $('.a-click').click(function(){
// 	console.log('click');
// });

// $('#rating').clone().appendTo('.userQuotes li:nth-child(1)');
// $('<span class="quoteRank">1 </span> <span>Stars!</span>').clone().appendTo('li:nth-child(1)');




// });









// //this is for clicking on the authors
// $(document).on('click', '.a-click',function(){
// 	console.log('click');
// });


// ///line 53 of main js oop-libraries for making list of authors


















