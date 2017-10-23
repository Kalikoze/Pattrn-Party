const animals = ['CLOUDED LEOPARD', 'CALIFORNIA SEA LION', 'MANED WOLF', 'RING-TAILED LEMUR'];
const images = ['leopard', 'sealion', 'wolf', 'lemur'];

const changeTab = tab => {
	const tabNum = tab.innerText.slice(4, 5);
	const animalList = [leopard, seaLion, manedWolf, lemur];
	const description = `
		<section class="display">
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
		</section>`;

	$('.is-active').removeClass('is-active');
	$(tab).addClass('is-active');
	changeSign(tab)
	if ($(window).width() > 980) { appendDisplay($('.tab')[3], description); }
	else { appendDisplay('.is-active', description); }
};

const changeSign = tab => {
	const value = $(tab).find('.sign');
	$('.sign').text('+');
	value.text() === '+' ? value.text('-') : value.text('+')
}

const appendDisplay = (value, description) => {
	$('.display').remove();
	$(value).after(`${description}`);
}

$('.tab').click(e => changeTab(e.currentTarget));
$('button').click(() => window.open('https://codepen.io/Kalikoze/pen/vevJmw'))
