/**
 * Write a function called filterLongWords(words, minLength) that takes an array of strings 
 * and an integer. The function must return a new array containing only the words that have at 
 * least that many characters.
 * 
 * Rules: Do not use built-in helpers like .filter(). Use a standard for loop and conditional logic.
 * 
 * Examples:filterLongWords(["sun", "star", "moon", "planet"], 5) -> ["planet"]
 * filterLongWords(["cat", "dog", "elephant", "fish"], 4) -> ["elephant", "fish"]
 */

function filterLongWords(words, minLength) {
    let array = [];

    for (let i = 0; i < words.length; i++) {    // i++ is to start summing up and covering the array
        if (words[i].length >= minLength) {
            array.push(words[i]);
        }
    }
    return array; // Justo fuera del scope del IF, pues si seguia dentro del scope del IF, cortaba el proceso
}
filterLongWords(["cat", "dog", "elephant", "fish"], 4)

let test = filterLongWords(["cat", "dog", "elephant", "fish"], 4)

console.log(test);

function filterLongWordsUsingFilter(words, minLength){
    return words.filter(currentWord => currentWord.length >= minLength);
}

let test2 = filterLongWordsUsingFilter(["cat", "dog", "elephant", "fish"], 4)
test2;

const funcionTest = (words, minLength) => words.filter(currentWord => currentWord.length >= minLength);



/**
 * EXERCISE: Raw Sensor Matrix Processor
 * 
 * SCENARIO:
 * You receive rows of raw sensor telemetry. Each row is represented purely as an array:
 * Schema per row: [sensorId, timestampHour, [reading1, reading2, ...], statusFlag]
 *   - sensorId: Number
 *   - timestampHour: Number (0-23)
 *   - readings: Array of Numbers (Celsius)
 *   - statusFlag: Number (1 = Active / Valid, 0 = Inactive / Error)
 * 
 * RULES:
 * - Use ONLY JavaScript array methods (e.g., filter, map, reduce, every).
 * - NO OBJECTS allowed anywhere (input, transformations, or final output).
 * - Do not mutate the original input array.
 * 
 * REQUIREMENTS:
 * 1. Filter Rows:
 *    - Keep only rows where statusFlag === 1.
 *    - Discard rows where the readings array is empty.
 *    - Discard rows containing any hardware glitch (reading < -50).
 * 
 * 2. Transform Rows into a 4-element summary tuple:
 *    - Index 0: sensorId as a string with a '#' prefix (e.g., "#101").
 *    - Index 1: Average temperature rounded to 1 decimal place (Number).
 *    - Index 2: Peak (maximum) temperature from that sensor's readings (Number).
 *    - Index 3: Alert status label (String):
 *        * "HIGH"   -> avg >= 30.0
 *        * "NORMAL" -> 20.0 <= avg < 30.0
 *        * "LOW"    -> avg < 20.0
 * 
 * EXPECTED OUTPUT:
 * [
 *   ["#101", 22.0, 23.5, "NORMAL"],
 *   ["#104", 31.6, 33.0, "HIGH"],
 *   ["#106", 28.5, 29.0, "NORMAL"]
 * ]
 */

const rawSensorMatrix = [
  [101, 14, [21.5, 22.0, 23.5, 21.0], 1],
  [102,  3, [18.0, 19.5, 17.0], 0],          // Inactive (status 0)
  [103, 11, [-999.0, 24.0, 25.0], 1],        // Glitch (-999)
  [104,  8, [31.0, 32.5, 30.0, 33.0], 1],
  [105, 16, [], 1],                          // Empty readings
  [106, 22, [28.0, 29.0], 1],
  [107, 19, [14.0, 15.0, 13.5], 0]           // Inactive (status 0)
];

function processTelemetry(matrix) {
}