// console.log('Calisiyor')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		// console.log('Secenek Tiklandi:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'style.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}


/* Scroll Reveal Animations */ 

window.sr = ScrollReveal({ reset: true });

sr.reveal('.greeting-wrapper',{

	delay: 1000,
	easing: 'ease-in',

});

sr.reveal('.left-column',{
    origin: 'left',
    distance: '10rem',
    duration: 1500,
	easing: 'ease-in',
	
});

sr.reveal('.right-column',{
    origin: 'right',
    distance: '10rem',
    duration: 1500,
	easing: 'ease-in',
	
});

sr.reveal('.education-card',{
    origin: 'right',
    distance: '10rem',
    duration: 2000,
    easing: 'ease-in-out',
});

sr.reveal('.info-card',{
    origin: 'left',
    distance: '10rem',
    duration: 2000,
    easing: 'ease-in-out',
});


sr.reveal('.contact-card',{
    origin: 'bottom',
    distance: '10rem',
    duration: 1500,
    easing: 'ease-in'
});

sr.reveal('.scroll',{
    origin: 'top',
    distance: '10rem',
    duration: 1500,
    easing: 'ease-in'
});
