const animals = ['CLOUDED LEOPARD', 'CALIFORNIA SEA LION', 'MANED WOLF', 'RING-TAILED LEMUR'];
const images = ['leopard', 'sealion', 'wolf', 'lemur'];

const changeTab = tab => {
	const tabNum = tab.innerText.slice(4, 5);
	const animalList = [leopard, seaLion, manedWolf, lemur];
	const description = `
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
		</div>`;

	$('.is-active').removeClass('is-active');
	$(tab).toggleClass('is-active');
	$(window).width() > 980 ? appendDisplay(tabNum, animalList, description) : appendTab(tab, tabNum, animalList, description);
};

const appendTab = (tab, tabNum, animalList, description) => {
	changeSign(tab)
	$('.display').remove();
	$('.is-active').after(`
	<section class="display">
		${description}
	</section>`)
}

const changeSign = tab => {
	const value = $(tab).find('.sign');
	$('.sign').text('+');
	value.text() === '+' ? value.text('-') : value.text('+')
}

const appendDisplay = (tabNum, animalList, description) => {
	$('.display').empty()
	$('.display').append(`${description}`)
}

$('.tab').click(e => changeTab(e.currentTarget));
