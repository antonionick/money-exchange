module.exports = function makeExchange(currency) {
	return exchange(currency);
};

function exchange(money) {
	let result = {};

	// if money < 1 or money > 10000 return
	if (money < 1) {
		return result;
	}
	else if (money > 10000) {
		result.error = `You are rich, my friend! We don't have so much coins for exchange`;
		return result;
	}

	// create arrays with coins value and coins title
	let coins = [50, 25, 10, 5, 1];
	let title = [`H`, `Q`, `D`, `N`, `P`];


	for (let i = 0; i < coins.length; i++) {
		// count coins[i] in money
		let count = 0;

		while (money >= coins[i]) {
			// divide the money by the coin[i]
			count = Math.floor(money / coins[i]);
			// compute money after divide
			money -=  count * coins[i];
			// if result obj doesn't have title[i] create, else add count to title[i] in obj
			if (!result[title[i]]) {
				result[title[i]] = count;
				continue;
			}

			result[title[i]] += money;
		}
	}

	return result;
}