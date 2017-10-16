const animals = ['CLOUDED LEOPARD', 'CALIFORNIA SEA LION', 'MANED WOLF', 'RING-TAILED LEMUR'];
const images = ['leopard', 'sealion', 'wolf', 'lemur'];

const changeTab = tab => {
	const tabNum = tab.innerText.slice(-2, -1);
	const animalList = [leopard, seaLion, manedWolf, lemur];
	$('.is-active').removeClass('is-active');
	$(tab).toggleClass('is-active');
	$('h3').text(animals[tabNum-1]);
	$('img').attr('src', `assets/${images[tabNum-1]}.jpg`);
	$('.description').find('p')[0].innerText = animalList[tabNum-1][0];
	$('.description').find('p')[1].innerText = animalList[tabNum-1][1] || '';
};

$('.tab').click(e => changeTab(e.currentTarget));
