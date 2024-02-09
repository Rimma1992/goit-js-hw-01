function getShippingMessage(country) {
  const message;
	const totalPrice = : price + deliveryFee;
	switch (country) {
		
		case "Australia":
            price = 120;
            deliveryFee = 50;
			message = `Shipping to ${country} will cost ${TotalPrice} credits`;
            break;
        case "Germany":
            price = 80;
            deliveryFee = 20;
			message = `Shipping to ${country} will cost ${TotalPrice} credits`;
			break;
		case "Sweden":
            price = 100;
            deliveryFee = 20;
			message = `Shipping to ${country} will cost ${TotalPrice} credits`;
			break;
	}
	return message;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"