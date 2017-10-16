const animals = ['CLOUDED LEOPARD', 'CALIFORNIA SEA LION', 'MANED WOLF', 'RING-TAILED LEMUR'];
const images = ['leopard', 'sealion', 'wolf', 'lemur'];
const leopard = ['Clouded leopards have a hyoid bone so they can purr like small cats, but they cannot roar like other large cats.  They have flexible ankle joints that allow their hind feet to rotate. This adaptation enables clouded leopards to descend trees headfirst. The only other cat that can do this is the margay.', 'The clouded leopard is one of the most arboreal of all cats.  They can leap 15 feet from branch to branch.  Despite their name, clouded leopards are not a species of leopard. Clouded leopards are placed in their own genus Neofelis because they are so unique. They are considered a “bridge” between typical big cats (lions, tigers, etc) and the small cats (puma, lynx, ocelot, etc)'];
const seaLion = ['Sea lions have tiny external ear flaps; seals do not have external ears.  Scientists believe sea lions may be as intelligent as cats and monkeys.  Unlike many other species of sea lion, the male California sea lion lacks a well-defined mane.', 'California sea lions are highly social animals gathering in large groups called “colonies”. They often rest closely packed together on land or float together in the water. During breeding season, adult males called bulls, battle for dominance and establish territories. Each male attracts a “harem” of up to 20 females. Females gather at a rookery – a beach or rocky outcropping - a few days before giving birth. In the safety of the rookery they give birth and nurse their young.'];
const manedWolf = ['The maned wolf is the largest wild dog of South America.  In Brazil, the night cry of the maned wolf is believed to portend changes in the weather.  The maned wolf does not use its claws for digging, but instead uses its teeth.  The maned wolf loves to eat bananas, guavas and sugar cane!', 'Monogamous pairs are the basic unit of the maned wolves’ social organization. The pair share and defend a territory but may not spend much time together. After pups are born, the female is the primary caregiver and may display aggression toward the male. In the wild, the extent of the male’s participation with pups is not known although in captivity males have been observed regurgitating food for the pups. Unlike other large canids, they specialize in hunting small prey and do not hunt cooperatively.'];
const lemur = ['Ring-tailed lemurs spend one-third of their day on the ground, more time on the ground than other lemurs. Males have “stink fights” for the right to breed with females – the smelliest guy fathers the most offspring.  Lemur means “ghost” in the Madagascar language.', 'Ring-tailed lemurs live in social groups of 5-24 individuals including a core group of adult females with their infants and juveniles, including one or more adult males. All females in the group are related while males move among troops. There is no consistent leadership in the group but all adult females are dominant over all males in the group. Troop members establish and aggressively defend territories.'];

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
