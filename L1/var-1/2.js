// Написати функцію, яка поверне усі перестановки слова

function permute(str, answer)
{ 
    if (str.length == 0) {
        console.log(answer + " ");
    }
      
    for(let i = 0; i < str.length; i++)
    {
        let ch = str[i];
        let left_substr = str.slice(0, i);
        let right_substr = str.slice(i + 1);
        let rest = left_substr + right_substr;
        permute(rest, answer + ch);
    }
}

let str = "abc";
let answer="";
permute(s, answer);