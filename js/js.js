$(document).ready(function(){


	// anim menu desktop 

		var competences = $('.bloc_competences').offset().top;

		var numero = $('.numero').offset().top;

		var logo = $('.bloc_slide_1').offset().top;

		var wd = $('.bloc_slide_2').offset().top;

		var print = $('.bloc_slide_3').offset().top;

		var md = $('.bloc_slide_4').offset().top;

		var contact = $('.bloc_contact').offset().top;



		$(window).scroll(function(){

			var distance = $(window).scrollTop();
			console.log(distance);

			setTimeout(function(slow){

				if((distance + 260) > competences) {

					$('.numero').html('02');
					$('.onglet_home_barre').css({'height':'0px'}, 500);
					$('.onglet_home_texte').css({'color':'rgba(255,255,255,0)'}, 500);
					$('.onglet_competences_barre').css({'height':'50px'}, 500);
					$('.onglet_competences_texte').css({'color':'rgba(255,255,255,1)'}, 500);
				}

				else {

					$('.numero').html('01');
					$('.onglet_home_barre').css({'height':'50px'}, 500);
					$('.onglet_home_texte').css({'color':'rgba(255,255,255,1)'}, 500);
					$('.onglet_competences_barre').css({'height':'0px'}, 500);
					$('.onglet_competences_texte').css({'color':'rgba(255,255,255,0)'}, 500);

				}

				if((distance + 260) > logo) {

					$('.numero').html('03');
					$('.onglet_competences_barre').css({'height':'0px'}, 500);
					$('.onglet_competences_texte').css({'color':'rgba(255,255,255,0)'}, 500);
					$('.onglet_logo_barre').css({'height':'50px'}, 500);
					$('.onglet_logo_texte').css({'color':'rgba(255,255,255,1)'}, 500);
				}

				else {

					$('.onglet_logo_barre').css({'height':'0px'}, 500);
					$('.onglet_logo_texte').css({'color':'rgba(255,255,255,0)'}, 500);

				}

				if((distance + 260) > wd) {

					$('.numero').html('04');
					$('.onglet_logo_barre').css({'height':'0px'}, 500);
					$('.onglet_logo_texte').css({'color':'rgba(255,255,255,0)'}, 500);
					$('.onglet_wd_barre').css({'height':'50px'}, 500);
					$('.onglet_wd_texte').css({'color':'rgba(255,255,255,1)'}, 500);
				}

				else {

					$('.onglet_wd_barre').css({'height':'0px'}, 500);
					$('.onglet_wd_texte').css({'color':'rgba(255,255,255,0)'}, 500);

				}

				if((distance + 260) > print) {

					$('.numero').html('05');
					$('.onglet_wd_barre').css({'height':'0px'}, 500);
					$('.onglet_wd_texte').css({'color':'rgba(255,255,255,0)'}, 500);
					$('.onglet_print_barre').css({'height':'50px'}, 500);
					$('.onglet_print_texte').css({'color':'rgba(255,255,255,1)'}, 500);
				}

				else {

					$('.onglet_print_barre').css({'height':'0px'}, 500);
					$('.onglet_print_texte').css({'color':'rgba(255,255,255,0)'}, 500);

				}

				if((distance + 260) > md) {

					$('.numero').html('06');
					$('.onglet_print_barre').css({'height':'0px'}, 500);
					$('.onglet_print_texte').css({'color':'rgba(255,255,255,0)'}, 500);
					$('.onglet_md_barre').css({'height':'50px'}, 500);
					$('.onglet_md_texte').css({'color':'rgba(255,255,255,1)'}, 500);
				}

				else {

					$('.onglet_md_barre').css({'height':'0px'}, 500);
					$('.onglet_md_texte').css({'color':'rgba(255,255,255,0)'}, 500);

				}

				if((distance + 260) > contact) {

					$('.numero').html('07');
					$('.onglet_md_texte').css({'color':'rgba(255,255,255,0)'}, 500);
					$('.onglet_contact_texte').css({'color':'rgba(255,255,255,1)'}, 500);
				}

				else {
					$('.onglet_contact_texte').css({'color':'rgba(255,255,255,0)'}, 500);

				}


				/*if(distance = competences) {

					$('html, body').animate({scrollTop: slide}, 1000);
				}

				else {
				}*/

			});

		});

	// Scroll lent
	
		$('a').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	
	// Apparition fleche pour remonter
		
		$(window).scroll(function (){ 
		$("#fleche_remonter").fadeIn();
		});

	// Apparition et disparition du menu

		// Quand on clique sur le picto burger le menu arrive à gauche

	$('.conteneur_menu_mobile_nav_burger').click(function () {
		if ( $('.menu_mobile_nav_liste').css('margin-left') == '-720px') {
			$('.menu_mobile_nav_liste').animate({'margin-left':'0px'}, 800);
		}

		else {}
	});

		// Quand on clique sur la croix le menu se range à gauche

	$('.menu_mobile_nav_liste_croix').click(function () {
		if ( $('.menu_mobile_nav_liste').css('margin-left') == '0px') {
			$('.menu_mobile_nav_liste').animate({'margin-left':'-720px'}, 800);
		}

		else {}
	});

		// Quand on clique sur l'un des onglets du menu mobile, le menu se range à gauche

	$('.menu_mobile_nav_liste ul li').click(function () {
		if ( $('.menu_mobile_nav_liste').css('margin-left') == '0px') {
			$('.menu_mobile_nav_liste').animate({'margin-left':'-720px'}, 800);
		}

		else {}
	});

		// SLIDES

			// Changement de slide + changement couleur boutons


			// SLIDE 1

		$(".bloc_slide_1 .bouton_slide_1").click(function() { 

			$(".bloc_slide_1 .contenu_slide").animate({"left":"-0px"},600);
			$(".bloc_slide_1 .bouton_slide_1 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_1 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_1 .bouton_slide_2").click(function() { 

			$(".bloc_slide_1 .contenu_slide").animate({"left":"-100%"},600);
			$(".bloc_slide_1 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_2 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_1 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_1 .bouton_slide_3").click(function() { 

			$(".bloc_slide_1 .contenu_slide").animate({"left":"-200%"},600);
			$(".bloc_slide_1 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_3 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_1 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_1 .bouton_slide_4").click(function() { 

			$(".bloc_slide_1 .contenu_slide").animate({"left":"-300%"},600);
			$(".bloc_slide_1 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_1 .bouton_slide_4 a").css({"background-color":"#ffffff"},0);

		});


		// SLIDE 2

		$(".bloc_slide_2 .bouton_slide_1").click(function() { 

			$(".bloc_slide_2 .contenu_slide").animate({"left":"-0px"},600);
			$(".bloc_slide_2 .bouton_slide_1 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_2 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_2 .bouton_slide_2").click(function() { 

			$(".bloc_slide_2 .contenu_slide").animate({"left":"-100%"},600);
			$(".bloc_slide_2 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_2 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_2 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_2 .bouton_slide_3").click(function() { 

			$(".bloc_slide_2 .contenu_slide").animate({"left":"-200%"},600);
			$(".bloc_slide_2 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_3 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_2 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_2 .bouton_slide_4").click(function() { 

			$(".bloc_slide_2 .contenu_slide").animate({"left":"-300%"},600);
			$(".bloc_slide_2 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_2 .bouton_slide_4 a").css({"background-color":"#ffffff"},0);

		});


		// SLIDE 3

		$(".bloc_slide_3 .bouton_slide_1").click(function() { 

			$(".bloc_slide_3 .contenu_slide").animate({"left":"-0px"},600);
			$(".bloc_slide_3 .bouton_slide_1 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_3 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_3 .bouton_slide_2").click(function() { 

			$(".bloc_slide_3 .contenu_slide").animate({"left":"-100%"},600);
			$(".bloc_slide_3 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_2 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_3 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_3 .bouton_slide_3").click(function() { 

			$(".bloc_slide_3 .contenu_slide").animate({"left":"-200%"},600);
			$(".bloc_slide_3 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_3 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_3 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_3 .bouton_slide_4").click(function() { 

			$(".bloc_slide_3 .contenu_slide").animate({"left":"-300%"},600);
			$(".bloc_slide_3 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_3 .bouton_slide_4 a").css({"background-color":"#ffffff"},0);

		});


		// SLIDE 4

		$(".bloc_slide_4 .bouton_slide_1").click(function() { 

			$(".bloc_slide_4 .contenu_slide").animate({"left":"-0px"},600);
			$(".bloc_slide_4 .bouton_slide_1 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_4 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_4 .bouton_slide_2").click(function() { 

			$(".bloc_slide_4 .contenu_slide").animate({"left":"-100%"},600);
			$(".bloc_slide_4 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_2 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_4 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_4 .bouton_slide_3").click(function() { 

			$(".bloc_slide_4 .contenu_slide").animate({"left":"-200%"},600);
			$(".bloc_slide_4 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_3 a").css({"background-color":"#ffffff"},0);
			$(".bloc_slide_4 .bouton_slide_4 a").css({"background-color":"#c1035c"},0);

		});

		$(".bloc_slide_4 .bouton_slide_4").click(function() { 

			$(".bloc_slide_4 .contenu_slide").animate({"left":"-300%"},600);
			$(".bloc_slide_4 .bouton_slide_1 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_2 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_3 a").css({"background-color":"#c1035c"},0);
			$(".bloc_slide_4 .bouton_slide_4 a").css({"background-color":"#ffffff"},0);

		});


});
