function getShippingCost(country) {
    
   let chinaPrice = 100;
   let chilePrise = 250;
   let australiaPrice = 170;
   let jamaicaPrice = 120;

  
    switch (country) {
        case 'China': return `Shipping to ${country} will cost ${chinaPrice} credits`; 
        case 'Chile': return `Shipping to ${country} will cost ${chilePrise} credits`;
        case 'Australia': return `Shipping to ${country} will cost ${australiaPrice} credits`;
        case 'Jamaica': return `Shipping to ${country} will cost ${jamaicaPrice} credits`;
        default: return `Sorry, there is no delivery to your country`;
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"