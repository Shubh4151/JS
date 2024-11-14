//Function calling///
// function fun()
// {
//     console.log("hello")
// }
// fun()

///Arithmatic operation program//
// function add(a,b)
// {
//     return a+b
// }
// console.log(add(5,10)) 
// function sub(a,b)
// {
//     return a-b
// }
// console.log(sub(5,10))
// function mul(a,b)
// {
//     return a*b
// }
// console.log(mul(3,4))
// function div(a,b)
// {
//     return a/b
// }
// console.log(div(10,5))
// function pow(a,b)
// {
//     a**b
// }
// console.log(pow(3,4))
// function mod(a,b)
// {
//     return a%b
// }
// console.log(mod(10,3))

//factorial of given no.
// function fact(n)
// {
//     let f=1
//     for(let i=1;i<=n;i++)
//         {
//             f=f*i
//         } 
//         return f
// }
// console.log(fact(5))

//check for even no
// function iseven(n)
// {
//     return n%2==0
// }
// console.log(iseven(8))
// console.log(iseven(11))

//check string is palindrome or not
// function ispal(s)
// {
//     let r=""
//     for(let i=s.length-1;i>=0;i--)
//         {
//             r=r+s[i]
//         } 
// //after this return
//         return r==s
//     }
//     console.log(ispal("icici"))
        //or//

        // if(r==s)
        // {
        //     return true
        //     console.log(r)
        // }
        // else{
        //     return false
        // }
//}
//console.log(ispal("120"))

//check prime no.
// function isprime(n)
// {
//     let c=0
//     for(let i=0;i<=n;i++)
//     {
//         if(n%i==0)
//         {
//             c++
//         }
//     }
//     return c==2
// }
// console.log(isprime("5"))

//or

// function isprime(n)
// {
//     let f=true
//     if(n<=1)
//     {
//         f=false
//     }
//     else{
//         for(let i=2;i<n;i++)
//         {
//             if(n%i==0)
//             {
//                 f=false
//                 break
//             }
//         }
//     }
//     return f
// }
//console.log(isprime(22))

//check gcd no.
// function isgcd(a,b)
// {
//     while(b!=0)
//     {
//         let r=a%b
//         a=b
//         b=r
//     }
//     return a
// }
// console.log(isgcd(25,40))

//count string length
//function wc(s)
//{
    // let a=s.split("")    //returns every single word length due to no space""
    // return a.length
    //or
    //return s.split(" ").length   //returns only word length due to seperated with space" "
//}
//console.log(wc("Hello to all"))


//display nearest prime no
// let n=20
// while(true)
// {
//     if(isprime(n))
//     {
//         console.log(n)
//         break
//     }
//     else{
//         n++
//     }
// }

//display nearest prime palindrome
// let n=120
// while(true)
// {
//     if((isprime(n))&&(ispal(n)))
//     {
//         console.log(n)
//         break
//     }
//     else{
//         n++
//     }
// }

//Display Nth prime no
