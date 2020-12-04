$(function(){
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		arrows:false,
		autoplay:3000,
		dots: true,
		responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2
                }
            }, 
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }          
        ]

	});
});