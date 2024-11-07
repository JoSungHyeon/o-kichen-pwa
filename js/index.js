window.addEventListener("load", function() {
	function isMobile() {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
	}
	console.log(navigator.userAgent);

	if(isMobile()){
		// console.log("모바일 장치입니다.");
		document.body.classList.add("real-mobile");
	}
	
	const mainSwiper = new Swiper(".mainSwiper", {});

	const subSwiper = new Swiper(".subSwiper", {
		  slidesPerView: 1,
		loop: true,
		  spaceBetween: 30,
		  pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  type: "fraction",
		  },
		breakpoints:{
			1200:{
			  slidesPerView:3
			},
			800:{
			  slidesPerView:2
			}
		}
	});

	const subBannerSwiper = new Swiper(".subBannerSwiper", {});

	const tipBannerSwiper = new Swiper(".tipBannerSwiper", {});

	let subBtnLeft = document.querySelector(".pgaination_wrap .btn_left");
	let subBtnRight = document.querySelector(".pgaination_wrap .btn_right");

	subBtnLeft.addEventListener("click", function(e) {
		e.preventDefault();
		subSwiper.slidePrev();
	});

	subBtnRight.addEventListener("click", function(e) {
		e.preventDefault();
		subSwiper.slideNext();
	});

	let body = document.querySelector("body");
	let openMenu = document.querySelector(".menu_wrap a");
	let mobileWrap = document.querySelector(".mobile_wrap");
	let mobileMenu = document.querySelector(".mobile_wrap .mo_menu");
	let closeMenu = document.querySelector(".mo_menu .mo_close");

	function open(p) {
		rightPosition = p;
		body.classList.add("active");
		mobileWrap.classList.add("active");
		setTimeout(function() {
			mobileMenu.style.right = p + "%";
		}, 200);
	}

	function close(p) {
		mobileMenu.style.right = p + "%";
		body.classList.remove("active");
		closeMenu.closest(".mobile_wrap").classList.remove("active");
	}

	openMenu.addEventListener("click", function(e) {
		e.preventDefault();
		open(0);
	});
	
	closeMenu.addEventListener("click", function(e) {
		e.preventDefault();
		
		close(-85);
	});
});