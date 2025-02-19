const isLowerCase = char => {return char == char.toLowerCase()};
const isUpperCase = char => {return char == char.toUpperCase()};
const isNumber = char => {return (!isNaN(char*1))}

const validatePassword = (s1, s2) => {
    //ensures that more than 8 ang characters nila AND same number of characters sila
    if(s1.length<8 || s2.length<8 || s1.length!=s2.length || s1!=s2) return false;

    var uCase1=0, lCase1=0, num1=0, uCase2=0, lCase2=0, num2=0;
    for(let i=0;i<s1.length;i++)
    {
        if (isNumber(s1[i])) num1++;
        else if (isUpperCase(s1[i])) uCase1++;
        else if (isLowerCase(s1[i])) lCase1++;

        if (isNumber(s2[i])) num2++;
        else if (isUpperCase(s2[i])) uCase2++;
        else if (isLowerCase(s2[i])) lCase2++;
    }

    // console.log(uCase1);
    // console.log(lCase1);
    // console.log(num1);
    // console.log(uCase2);
    // console.log(lCase2);
    // console.log(num2);

    if(uCase1==0 || lCase1==0 || num1==0 || uCase2==0 || lCase2==0 || num2==0) return false;
    return true;
}

const reverseString = (string) => {
    const reverseString = [];

    // console.log(string.length);
    for (let i=0; i<string.length;i++)
    {
        reverseString[i]=string[string.length-i-1];
    }

    return reverseString.join("");
}

const storePassword = (name, p1, p2) => {

    const passwordManager = {
        "name": name,
        "password": p1,
        "new password": (validatePassword(p1, p2))? reverseString(p1, p2): p1 
    }

    return passwordManager
}

console.log(storePassword("IAn", "ianianIAN0909", "ianianIaN0909"))