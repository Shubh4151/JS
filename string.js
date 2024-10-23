//string concatination//
// s1="java"
// s2="script"
// console.log(s1+s2)
// console.log(s1+" "+s2)
// console.log(s1.concat(" ",s2))
// console.log("--")
//string length
// console.log(s1.length)
// console.log(s2.length)
// console.log("--")
//string character at index
// console.log(s1[0])
// console.log(s1.charAt[0])
// console.log("--")
// for(let i=0;i<s1.length;i++)
// {
//     console.log(s1[i])
// }
// console.log("--")

//string reverse
// let s="javascript"
// let r=""
// for (let i=s.length-1;i>=0;i--)
// {
//     r=r+s[i]
// }
// console.log(r)

//string lowercase
// let s="hElLo To All"
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())

//verify given elements in string
// let s ="hello to all"
// console.log(s.includes("to"))
// console.log(s.includes("too"))
// console.log(s.indexOf("to"))
// console.log(s.indexOf("ll"))
// console.log(s.indexOf("welcome"))
// console.log(s.lastIndexOf("ll"))

//replace string elements
// let s="hello to all"
// console.log(s.replace("hello","hi"))
// console.log(s.replace("ll","@@@"))
// console.log(s.replaceAll("ll","@@@"))
// console.log(s.replaceAll("ll",""))

//string seperator
// let s="hello to all the full stack developers"
// console.log(s.split(" "))
// console.log(s.split(""))
// console.log(s.split(" ",5))


//join string
// let s=['html','css','javascript','react','express','node']
// console.log(s.join("--"))
// let a=[5,67,45,23,65,87]
// console.log(a.toString())
// console.log(a.join(" "))

//Extract substring from main string
// let s="hellotoall"
// console.log(s.slice(2,6))
// console.log(s.substring(2,6))
// console.log(s.substr(2,4))

//To get ASCII value of given characters in string
// let s="heA2Z"
// console.log(s.codePointAt(0))
// console.log(s.codePointAt(4))

//Trim string
// let s="    sg hd   dsd s   h"
// console.log(s.trim())
// console.log(s.trimStart())
// console.log(s.trimEnd())

//check given string starting with given prefix or not
// let s="abacabb"
// console.log(s.startsWith("aba"))
// console.log(s.endsWith("abb"))
// console.log(s.startsWith("aca",2))

//repeat string n times
// let s="abc"
// console.log(s.repeat(5))

// calculate weight of given string
// let s="abacabb"
// let w=0
// for(let i=0;i<s.length;i++)
// {
//     w=w+s.codePointAt(i)-96
// }
// console.log(w)


//reverse every word in string in place
// let s="welcome to all"
// s=s.split(" ")
// for(let i=0;i<s.length;i++)
// {
//     let r=" "
//     for(let j=0;j<s[i].length;j++)
//     {
//         r=s[i][j]+r
//     }
//     s[i]=r
// }
// console.log(s.join(" "))

//reverse string and check its palindrome or not
// let s="ICICI"
// let r=""
// for(let i=s.length-1;i>=0;i--)
// {
//     r=r+s[i]
// }
// console.log(r)
// if(r==s)
// {
//     console.log("palindrome")
// }
// else{
//     console.log("not")
// }


/*If two adjascent characters in string are same then delete both and display resultant string,
if no character left display empty string*/
// let s="abccba"
// s.split(" ")
// let i=0
// while(i<s.length-1)
// {
//     if(s[i]==s[i+1])
//     {
//         s.Splice(i,2)
//         i=0
//     }
//     else
//     {
//         i++
//     }
// }
// if(s.length==0)
// {
//     console.log("empty string")
// }
// else
// {
//     console.log(s.join(""))
// }

//not working ^ program splice function


//frequency count of every character in string
// let s="gdsfggdsgergfdfd"
// let obj={}
// for(let i=0;i<s.length;i++)
// {
//     if(obj[s[i]]==undefined)
//     {
//         obj[s[i]]=1
//     }
//     else
//     {
//         obj[s[i]]+=1
//     }
// }
// console.log(obj)


//Template Strings
// let a=5, b=8
// console.log("sum of","a","+","b","is "+(a+b))
// console.log(`sum of ${a},${b} is ${a+b}`)
// console.log(`diff of ${a},${b} is ${a-b}`)
