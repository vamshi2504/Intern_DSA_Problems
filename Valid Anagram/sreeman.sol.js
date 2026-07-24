function isAnagram(s,t){
    if(s.length !== t.length) return false;

    let freq = {};
    for(let ch of s){
        freq[ch] = (freq[ch] || 0) +1;
    }
    for(let ch of t){
        if(!freq[ch]){
            return false;
        }
        freq[ch]--;
    }
    return true;
}
console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("jar", "jam"));
