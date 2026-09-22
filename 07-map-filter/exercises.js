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