var Quote = function(text, author, rating){
	text = text || 'You should probably enter a quote.';
		author = author || 'anonymous';

  // Longer, but means more control:
	  if(text === undefined){
	    text = 'You should probably enter a quote.';
	  }
	  if(author === undefined){
	    author = 'anonymous';
	  }
		this.text = text;
		this.author = author;
		this.rating = +rating;

		this.render();
};


//generate dom element for specific quote
Quote.prototype.render = function() {

	if(this.el === undefined){
		this.el=$('#quote-tpl')
		.clone()
		.attr('id', null);
		// michaels code
		var originalQuote = this;
		this.el.find('.delete').on('click', function(){
			console.log('delete-clicked');
			originalQuote.el.remove();
			for(var i = 0 ; i < QuoteArray.length ; i++){
                if(QuoteArray[i].text === originalQuote.text){
                  QuoteArray.splice(i,1);
				}
			}
		});
		



	}

this.el.find('.quote-text').text(this.text);
this.el.find('.quote-author').text('- '+ this.author);
this.el.find('.quote-rating').text(this.rating + " Stars!");	


//return reference so that it can be called on later within an append
return this.el;
};



//class to maintain all quotes
var QuoteLibrary = function(name){
	this.name = name;
	this.quotes = []; 
	this.render();
};

//how to add qotes
QuoteLibrary.prototype.addQuote = function(quote) {
	//given a quote instance (text author rating) push to quotes []
	this.quotes.push(quote);
	this.render();
};


//generate dom element for entire library
QuoteLibrary.prototype.render = function(){
	if(this.el === undefined){
		this.el = $('#quote-library-tpl')
		.clone()
		.attr('id', null);




	
		var originalLibrary = this;
//now need to attach an event listener
	this.el.find('.new-quote-form').on('submit',function(e){
		e.preventDefault();
		console.log('submit function submitted');
		var quoteText = $(this).find('[name = quote-text]').val();
		var quoteAuthor = $(this).find('[name = quote-author]').val();
		var quoteRating = $(this).find('[name = quote-rating]:checked').val();

		
		//generate new quote instance
		var newQuote = new Quote(quoteText, quoteAuthor, quoteRating);
		originalLibrary.addQuote(newQuote);
		$(".text, .author").val('');


			
	});

	

}
this.el.find('.library-name').text(this.name);



var quoteElements = this.quotes.map(function(quote){
	return quote.render();
});
this.el.find('.quote-list').append(quoteElements);
return this.el;
};
var firstquote = new Quote('This is the first quote, its a pretty booring one', 'Tyler', '2');
var myLibrary = new QuoteLibrary ('');
myLibrary.addQuote(firstquote);

var QuoteArray = myLibrary.quotes; 

$('body').append(myLibrary.render());

$('.sort-button').on('click', function(){
	console.log('sort it');
	QuoteArray.sort(function(a, b){
		return b.rating-a.rating;
	});
	myLibrary.render();
});


// QuoteLibrary.prototype.deleteQuote = function(quote) {
	
// 	$('.delete').on('click', function(){
// 	console.log('delete');
// 	this.render();
// });
	
//detach





