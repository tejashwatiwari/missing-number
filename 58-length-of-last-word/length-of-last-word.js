/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
        for(let i= s.length-1; i>=0; i--){
        if(s[i]!=' '){
            count++;
            if(i>0 && s[i-1] == ' '){
                break;
            }
        }
    }
    return count;
};