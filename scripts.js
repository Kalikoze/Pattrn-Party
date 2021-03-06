const changeTab = tab => {
  $('.is-active').removeClass('is-active');
	$(tab).addClass('is-active');
  $('.display').addClass('hidden')
  $(tab).next().removeClass('hidden')
	changeSign(tab)
};

const changeSign = tab => {
	const value = $(tab).find('.sign');
	$('.sign').text('+');
	value.text() === '+' ? value.text('-') : value.text('+')
}

$('.tab').click(e => changeTab(e.currentTarget));
$('.menu').click(() => $('.navigation').toggleClass('appear'))
$('.link-accordion').click(() => window.open('https://codepen.io/Kalikoze/pen/vevJmw'))
$('.link-flexible').click(() => window.open('https://codepen.io/Kalikoze/pen/BwgqRE'))
$('.link-header').click(() => window.open('https://codepen.io/Kalikoze/pen/EbjJoo'))
