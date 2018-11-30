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
		items: 1,
		loop: true,
		responsive: {
			768: {
				items: 3
			}
		}
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

	$('.partner .owl-carousel').owlCarousel({
		nav: true,
		dots: false,
		items: 2,
		loop: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			768: {
				items: 5
			}
		}
	});


});

function filter(e) {
	$('.orient .data-tabs .owl-carousel .item').show();
	$('.orient .data-tabs .owl-carousel .item').each(function () {
		if($(this).hasClass(e) == true) {
			$(this).show();
			dung++;
			console.log('dung');
		}
		else {
			$(this).hide();
		}
	})
}
