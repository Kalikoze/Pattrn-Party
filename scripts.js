const animals = ['CLOUDED LEOPARD', 'CALIFORNIA SEA LION', 'MANED WOLF', 'RING-TAILED LEMUR'];
const images = ['leopard', 'sealion', 'wolf', 'lemur'];

const changeTab = tab => {
	const tabNum = tab.innerText.slice(-2, -1);
	const animalList = [leopard, seaLion, manedWolf, lemur];
	$('.is-active').removeClass('is-active');
	$(tab).toggleClass('is-active');
	$(window).width() > 980 ? appendDisplay(tabNum, animalList) : appendTab(tabNum, animalList);
};

const appendTab = (tabNum, animalList) => {
	$('.display').remove();
	$('.is-active').after(`<section class="display">
		<img src="assets/${images[tabNum-1]}.jpg" alt="">
		<div class="info">
			<h3>${animals[tabNum-1]}</h3>
			<hr class="display-hr">
			<section class='description'>
				<p>
					${animalList[tabNum-1][0]}
				</p>
				<br>
				<p>
					${animalList[tabNum-1][1] || ''}
				</p>
			</section>
		</div>
	</section>`)
}

const appendDisplay = (tabNum, animalList) => {
	$('.display').empty()
	$('.display').append(`
		<img src="assets/${images[tabNum-1]}.jpg" alt="">
		<div class="info">
			<h3>${animals[tabNum-1]}</h3>
			<hr class="display-hr">
			<section class='description'>
				<p>
					${animalList[tabNum-1][0]}
				</p>
				<br>
				<p>
					${animalList[tabNum-1][1] || ''}
				</p>
			</section>
		</div>`)
}

$('.tab').click(e => changeTab(e.currentTarget));
