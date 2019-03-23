module.exports = function makeExchange(currency) {
	return exchange(currency);
};

function exchange(money) {
	let result = {};

	if (money < 1) {
		return result;
	}
	else if (money > 10000) {
		result.error = `You are rich, my friend! We don't have so much coins for exchange`;
		return result;
	}

	let coins = [50, 25, 10, 5, 1];
	let title = [`H`, `Q`, `D`, `N`, `P`];


	for (let i = 0; i < coins.length; i++) {
		let count = 0;

		while (money >= coins[i]) {
			count = Math.floor(money / coins[i]);
			money -=  count * coins[i];
			if (!result[title[i]]) {
				result[title[i]] = count;
				continue;
			}

			result[title[i]] += money;
		}
	}

	return result;
}