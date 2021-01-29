// let statistics = {
//     redCars: 21,
//     blueCars: 45,
//     greenCars: 12,
//     raceCars: 5,
//     blackCars: 40,
//     rareCars: 2
// };

for (const prop in statistics) {
    let propValue = statistics[prop];
    if ( (prop[0] === "r") || (propValue % 2 != 0) ) {
        console.log(propValue);
    }
}