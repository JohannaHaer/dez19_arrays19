let tempCelsius = [0, 25, 30, 34]
console.log(tempCelsius);

let tempFahrenheit = tempCelsius.map(temp => (temp * 9/5) + 32)
console.log(tempFahrenheit);