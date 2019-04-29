var nav = document.querySelector('.mynav2'); 

window.addEventListener('scroll', function() { 
    if (window.scrollY > 1) { 
        nav.style.backgroundColor = 'rgb(67, 23, 129)'; 
    	document.querySelector('.singleBTN').classList.remove('singlePageLink2');
    } else {
        nav.style.backgroundColor = 'transparent';
		document.querySelector('.singleBTN').classList.add('singlePageLink2');
    }
});
window.onbeforeunload = function () {
 window.scrollTo(0, 0);
}

var games = [
    {
        name: 'Dotmocracy',
        picture: "images/1.png",
        category: "Акција",
        time: "5-30мин",
        
    },
    {
        name: 'Project Mid-way Evaluation',
        picture: "images/2.png",
        category: "Акција",
        time: "30-60мин",
    },
    {
        name: 'Тhe 5 Whys',
        picture: "images/3.png",
        category: "Иновации",
        time: "30-60мин",
        
    },
    {
        name: 'Future Trends',
        picture: "images/4.png",
        category: "Иновации",
        time: "60-120мин",
        
    },
    {
        name: 'Story Building',
        picture: "images/5.png",
        category: "Иновации",
        time: "30-60мин",
        

    },
    {
        name: 'Тake a Stand',
        picture: "images/6.png",
        category: "Иновации",
        time: "60-120мин",
        
    },
    {
        name: 'IDOARRT Meeting Design',
        picture: "images/7.png",
        category: "Акција",
        time: "5-30мин",
        
    },
    {
        name: '3 Action Steps',
        picture: "images/8.png",
        category: "Акција",
        time: "120-240мин",
        
    },
    {
        name: 'Letter to Myself',
        picture: "images/9.png",
        category: "Иновации",
        time: "5-30мин",
        
    },
    {
        name: 'Аctive Listening',
        picture: "images/10.png",
        category: "Иновации",
        time: "60-120мин",
        
    },
    {
        name: 'Feedback: I appreciate',
        picture: "images/11.png",
        category: "Лидерство",
        time: "60-120мин",
    },
    {
        name: 'Explore your values',
        picture: "images/12.png",
        category: "Лидерство",
        time: "60-120мин",
    },
    {
        name: 'Reflection Individual',
        picture: "images/13.png",
        category: "Лидерство",
        time: "30-60мин",
    },
    {
        name: 'Back-turned Feedback',
        picture: "images/14.png",
        category: "Лидерство",
        time: "60-120мин",
    },
    {
        name: 'Conflict Responses',
        picture: "images/15.png",
        category: "Тим",
        time: "60-120мин",
    },
    {
        name: 'Myers-Briggs Team Reflection',
        picture: "images/16.png",
        category: "Тим",
        time: "60-120мин",
    },
    {
        name: 'Personal Presentations',
        picture: "images/17.png",
        category: "Тим",
        time: "60-240мин",
    },
    {
        name: 'Circles of influence',
        picture: "images/18.png",
        category: "Иновации",
        time: "30-120 минути",
    },


];
let x = 1;
let mainDiv = document.querySelector('.maindiv');
games.forEach(function (element) {
    mainDiv.innerHTML += `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 gamepadbot">
						<a href="SinglePage`+ x +`.html"><div class="card">
							<div class="cardtop">
								<img src="`+ element.picture +`" alt="" class="img-responsive">
							</div>
							<div class="bottom">
								<div class="miniFlex1">
									<div class="mrgRight">
										<h5 class="textBold textBlack kText">` + element.name + `</h5>
										<p class="textBlack">Категорија: <span class="aquaText textBold">`+ element.category + `</span></p>
									</div>
									<div class="miniLogo">
										<img src="` + element.picture + `" alt="" class="img-responsive img-circle pull-right">
									</div>
								</div>
								<div class="padLeft pdtp2 pdtp2bot miniFlex">
									<i class="far fa-clock"></i>
									<p class="textBold textBlack">Времетраење<br><span class="text-muted">` + element.time + `</span></p>
								</div>
							</div>
						</div>
					</a>
					</div>`;
					x++;
});
