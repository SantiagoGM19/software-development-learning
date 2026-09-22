// 1. 'while' loop

let foodPercentage = 100;
let bitePower;

while (foodPercentage > 0) {
    
    if (foodPercentage <= 60 && foodPercentage >= 20) {
        bitePower = 10;
    } else {
        bitePower = 1;
    }

    foodPercentage = foodPercentage - bitePower;

    console.log(`Bite power: ${bitePower} | Food left: ${foodPercentage}%`);
}

console.log("Finished eating!");


// 2. 'for' loop

let energyLevel = 100;

for (let day = 1; day <= 7; day++) {
    
    if (day === 6 || day === 7) {
        energyLevel = energyLevel + 20;
        console.log(`Day ${day} : Weekend! The pug sleeps all day.`);
    } else {
        energyLevel = energyLevel - 15;
        console.log(`Day ${day} : Weekday. Going for a short walk.`);
    }

    console.log(`Current energy: ${energyLevel}% \n`);
}

console.log("Week finished!");
