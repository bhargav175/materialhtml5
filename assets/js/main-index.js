define(function(require){
    var jQuery = require('jquery');
    var hammer = require('hammerjs');
    var jQuery =$;

    requirejs.config({
        shim: {
            'materialize': {
                //These script dependencies should be loaded before loading
                //backbone.js

                //Once loaded, use the global 'Backbone' as the
                //module value.
            },
            'jquery.timeago.min':{
                deps: ['materialize']
                //Once loaded, use the global 'Backbone' as the
                //module value.
            },
            //'platform':{
            //    deps: ['materialize']
            //    //Once loaded, use the global 'Backbone' as the
            //    //module value.
            //},
            'prism':{
                deps: ['materialize']
                //Once loaded, use the global 'Backbone' as the
                //module value.
            },
            'chart/Chart.min':{
                deps: ['materialize']
                //Once loaded, use the global 'Backbone' as the
                //module value.
            },
            'sliderpro/jquery.sliderPro.min':{
                deps: ['materialize'],
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
            'dependencies/lightbox/js/lightbox.min':{
                deps: ['jquery'],
                //Once loaded, use the global 'Backbone' as the
                //module value.
                exports: 'lightbox'
            },
            'init':{
                deps: ['jquery','materialize','magnific/magnific-popup'],
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
    //require(["materialize","jquery.timeago.min","platform","prism","sliderpro/jquery.sliderPro.min","init","paper","owlCarousel/owl.carousel.min","chart/Chart.min","magnific/magnific-popup","init2","../../dependencies/layerslider/js/greensock","../../dependencies/layerslider/js/layerslider.transitions","../../dependencies/layerslider/js/layerslider.kreaturamedia.jquery"],function(materialize,timeago,platform,prism,slider,init,paper,owl,chart,mag,init2,greensock,transition,kreatura){
    //
    //    jQuery("#layerslider").layerSlider({
    //        pauseOnHover: false,
    //        skinsPath: 'dependencies/layerslider/skins/',
    //        skin: 'noskin',
    //        showCircleTimer: false
    //    });
    //    if(loadedFunction){
    //        loadedFunction();
    //    }
    //
    //});

    require(["materialize","jquery.timeago.min","prism","sliderpro/jquery.sliderPro.min","init","paper","owlCarousel/owl.carousel.min","../../dependencies/lightbox/js/lightbox.min","chart/Chart.min","init2","../../dependencies/layerslider/js/greensock","../../dependencies/layerslider/js/layerslider.transitions","../../dependencies/layerslider/js/layerslider.kreaturamedia.jquery"],function(materialize,timeago,prism,slider,init,paper,owl,lightbox,chart,init2,greensock,transition,kreatura){

        jQuery("#layerslider").layerSlider({
            pauseOnHover: false,
            skinsPath: 'dependencies/layerslider/skins/',
            skin: 'noskin',
            showCircleTimer: false
        });
        if(loadedFunction){
            loadedFunction();
        }

    });

});