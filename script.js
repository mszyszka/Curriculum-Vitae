        ///////////////////////////////////////////Menu open///////////////////////////////////////////


        function myHamburger(x) {
            x.classList.toggle("change");
            document.getElementsByClassName("navMenu")[0].classList.toggle('navOpen');
        }

        //////////////////////////////////////////End of menu open//////////////////////////////////////



        //////////////////////////////////////////Top button///////////////////////////////////////////


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

        ////////////////////////////////////////End of top button/////////////////////////////////////


        ///////////////////////////////////////////Sticky navContainer///////////////////////////////////////////

        /*$(document).ready(function() {
			// grab the initial top offset of the navigation 
		   	var stickyNavTop = $('.navContainer').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
			    // otherwise change it back to relative
			    if (scrollTop > stickyNavTop) { 
			        $('.navContainer').addClass('stickyNav');
			    } else {
			        $('.navContainer').removeClass('stickyNav'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});
        
        I realized i dont need it
        
        End of sticky navContainer*/
        
        //////////////////////////////////////////////   End    //////////////////////////////////////////////




        ///////////////////////////////////////////Sticky header///////////////////////////////////////////

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
			        $('.navMenu').addClass('navMenuShadow');/*When header sticks, im adding to .navMenu class .navMenuShadow that delete shadow from ul*/
			        $('#aboutMe').addClass('aboutMeMarginTop'); /*When header sticks, im adding proper margin-top to #aboutMe section, below it to prevent covering part of #aboutMe section */
			    } else {
			        $('.siteHeader').removeClass('stickyHeader'); 
                    $('.navMenu').removeClass('navMenuShadow');
			        $('#aboutMe').removeClass('aboutMeMarginTop'); 
			    }
			};

			stickyHeader();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyHeader();
			});
		});

        ////////////////////////////////////////End of sticky header/////////////////////////////////////////



        //////////////////////////////////////////Sticky navMenu///////////////////////////////////////////

        //Im making it becouse when im opening my menu on sticky header menu is on the  top of the site. - I fixed it in simpler way

       /* $(document).ready(function() {
			// grab the initial bottom offset of the header 
		   	var stickyHeaderTop = $('.siteHeader').offset().top;
		   	
		   	// our function that decides weather the navMenu  should have "fixed" css position or not.
		   	var stickyNavMenu = function(){
			    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			         
			    // if we've scrolled more than the Header, change navMenu position to fixed to stick to bottom of header,
			    // otherwise change it back to relative
			    if (scrollTop > stickyHeaderTop) { 
			        $('.navMenu').addClass('stickyNavMenu');
			    } else {
			        $('.navMenu').removeClass('stickyNavMenu'); 
			    }
			};

			stickyNavMenu();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNavMenu();
			});
		});
                I realized i dont need it to

        */

        //////////////////////////////////////////      End     ///////////////////////////////////////////
