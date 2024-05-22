
function checkForSpam(message) {
    const bannedWords = ['spam', 'sale'];
    
    const messageToLowercase = message.toLowerCase();
    
    for(let word of bannedWords) {
        if(messageToLowercase.includes(word)) {
            return true;
        }
    }
    
    return false;
}



console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 
