requirejs.config({
	shim: {

		'materialize': {
			//These script dependencies should be loaded before loading
			//backbone.js

		},
		'sliderpro/jquery.sliderPro':{
			deps: ['jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'slider'
		},
		'owlCarousel/owl.carousel.min':{
			deps: ['jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'owl'
		},
		'init':{
			deps: ['jquery', 'hammerjs','materialize','magnific/magnific-popup'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'init'
		},
		'init2':{
			deps: ['init','chart/Chart.min','owlCarousel/owl.carousel.min','sliderpro/jquery.sliderPro.min'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'init2'
		}
	}
});
require(["materialize","jquery.timeago.min","platform","prism","sliderpro/jquery.sliderPro.min","init","paper","owlCarousel/owl.carousel.min","chart/Chart.min","magnific/magnific-popup","init2"],function(materialize,timeago,platform,prism,slider,init,paper,owl,chart,mag,init2){

});
