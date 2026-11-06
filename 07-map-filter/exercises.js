/**
 * Write a function called cleanUsernames(usernames) that receives an array of strings 
 * representing usernames. The function must return a new array where each username meets
 *  these rules:
 * 
 * 1 .It must start with an @ symbol (if it already has one, don't add another).
 * 2. It must be in lowercase.
 * 3. If a username has fewer than 3 characters (excluding the @), replace it with the string "invalid".
 * 
 * Examples:
 * cleanUsernames(["Alex", "@Maria", "yo", "DEV_USER"]) -> ["@alex", "@maria", "invalid", "@dev_user"]
 */

function cleanUsernames(usernames) {
  let result = [];

  for (let i = 0; i < usernames.length; i++) {
    let name = usernames[i].toLowerCase();

    // Remove leading '@' temporarily to check length cleanly
    let rawName = name.startsWith("@") ? name.slice(1) : name;

    if (rawName.length < 3) {
      result.push("invalid");
    } else {
      let formatted = name.startsWith("@") ? name : "@" + name;
      result.push(formatted);
    }
  }

  return result;
}

// Test case
console.log(cleanUsernames(["Alex", "@Maria", "yo", "DEV_USER"]));
// Output: ["@alex", "@maria", "invalid", "@dev_user"]