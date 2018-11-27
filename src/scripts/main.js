// 1.home-banner
$(document).ready(function () {
	$('.banner .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
	});

	$('.orient .data-tabs .owl-carousel').owlCarousel({
		nav: false,
		dots: false,
		items: 3,
		loop: true
		// navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
	});

	$('.review .avatar .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		items: 1,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			768: {
				nav: false,
				dots: true
			}
		}
	});

});

function filter(e) {
	let dung  = 0;
	let sai  = 0;
	$(this).parents('.tabs').find('li').toggleClass('active')
	// $('.orient .data-tabs .owl-item .item').each(function () {
	// 	$(this).parents('.owl-item').show()
	// 	if($(this).hasClass(e) == true) {
	// 		$(this).parents('.owl-item').show()
	// 		dung++
	// 	}
	// 	else {
	// 		$(this).parents('.owl-item').hide()
	// 		sai++
	// 	}
	// })
	console.log('dung = ', dung)
	console.log('sai = ', sai)
}

// $('.tabs ul li a').on('click', function(){
// 	$(this).parents('.tabs').find('li').toggleClass('active')
// })
