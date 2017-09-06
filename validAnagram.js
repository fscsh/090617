function isAnagram(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    console.log('s',s,'t',t);
    if (s.length !== t.length) {
        return false;
    }
    for (var i = 0; i < s.length; i++) {
        console.log('i = ',i ,'s[i]',s[i],'t[i]',t[i]);
        // if (!t.includes(s[i])) {
        //     return false;
        // }else {
        //     // console.log('before t =',t);
        //     t.splice(t.indexOf(s[i]),1);
        //     // console.log('t = ',t);
        // }
        if (s[i] !== t[i] ) {
            return false;
        }
    }
    return true;
    // if (t.length === 0) {
    //     return true
    // }else {
    //     return false
    // }

}
let s = "anagram";
let t = "nagaram";
// let s = "";
// let t = "";

console.log(isAnagram(s, t));
