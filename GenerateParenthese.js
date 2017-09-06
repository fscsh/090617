function generateParenthesis(n) {

    return helper(n, n, tmp = '', res = []);
}

function helper(l, r, tmp, res) {
    if (r === 0) {
        console.log(res);
        return res.push(tmp);
    }
    if (l > 0) {
        // tmp.push('(');
        tmp +='(';
        // console.log(tmp);
        helper(l - 1, r, tmp, res);
        // tmp.pop();
        tmp = tmp.substring(0,tmp.length-1);
    }
    if (l < r) {
        // tmp.push(')');
        tmp +=')';
        helper(l, r - 1, tmp, res);
        // tmp.pop();
        tmp = tmp.substring(0,tmp.length-1);
    }
    return res;
}
console.log(generateParenthesis(3));
