 //Menu open
        function myHamburger(x) {
            x.classList.toggle("change");
            document.getElementsByClassName("navMenu")[0].classList.toggle('navOpen');
        }
        //Top button:
        // 1. lets first listen for the scroll event
        $(window).scroll(function () {
            // top value in this case 0
            var windowScroll = $(this).scrollTop();
            // determine when to show button
            var showScrollBtn = 120;
            // fadein / fadeout back to  top button
            if (windowScroll > showScrollBtn) {
                $('#topBtn').fadeIn();
            }
            else {
                $('#topBtn').fadeOut();
            }
        });
        // on click:
        $('#topBtn').click(function () {
            $('body,html').animate({
                // position you want  scroll to
                scrollTop: 0
            }, 500);
        });
        // scroll to function
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link1').click(function(){
                $.scrollTo($("#js").offset().top -30,500);   
            });
        });
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link2').click(function(){
                $.scrollTo($("#css").offset().top -30,600);   
            });
        });
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link3').click(function(){
                $.scrollTo($("#html").offset().top -30,700);   
            });
        });
        jQuery(function($){
            //scroll reset
            $.scrollTo(0);
            $('#link4').click(function(){
                $.scrollTo($("#tech").offset().top -30,800);  
            });
        });

   //Sticky .navContainer

        $(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.navContainer').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.navContainer').addClass('sticky');
			    } else {
			        $('.navContainer').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});

 //Sticky header for width less then 992px;
        $(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyHeaderTop = $('.siteHeader').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyHeader = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyHeaderTop) { 
			        $('.siteHeader').addClass('stickyHeader');
			    } else {
			        $('.siteHeader').removeClass('stickyHeader'); 
			    }
			};

			stickyHeader();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyHeader();
			});
		});
        