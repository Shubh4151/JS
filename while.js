//Display 1 to n numbers using while
// let n=10,i=1
// while(i<=n)
// {
//     console.log(i)
//     i++
// }


//Display given no is prime or not
// let n=1, i=2, f=true
// if(n==1)
// {
//     console.log("not prime")
// }
// else{
//     while(i<n)
//     {
//         if(n%i==0){
//             f=false
//             break
//         }
//         i++
//     }
//     if(f){
//         console.log("prime")
//     }
//     else{
//         console.log("not a prime")
//     }
// }

//Display first n numbers using fibonacci sequence///
// let n=8, a=-1, i=1, b=1
// while(i<=n){
//     c=a+b
//     console.log(c)
//     a=b
//     b=c
//     i++
// }

//Reverse the given no and its palindrome or not
// let n=121314, r=0
// let t=n
// while(n!=0)
// {
//     d=n%10
//     r=r*10+d
//     n=parseInt(n/10)
// }
// if(t==r)
// {
//     console.log("Palindrome")
// }
// else{
//     console.log("not")
// }

/////// Display greatest digit from given number////////
// let n=587653
// let max=0

// while(n!=0)
// {
//     d=n%10
//     n=parseInt(n/10)
//     if(d>max)
//     {
//         max=d
//     }
// }
// console.log(max)


///////display given digit repeated in given number/////////////
// let n=123162132164372
// let digit=1
// let count=0

// while(n!=0)
// {
//     let x = parseInt(n%10) 
//     if(x==digit)
//         count++    
//         n=parseInt(n/10)
// }
// console.log(count)

////////check weather given no contains 5 or 7////////////

// let n=7823
// let f=false
// while(n!=0)
// {
//     d=n%10
//     n=parseInt(n/10)
//     if(n==5||n==7) 
//     {
//         f=true
//         break
//     }    
//     if(f){
//     console.log("yes")
//     }
//     else{
//     console.log("no")
//     }
// }


//Display smallest digit from given number

// let n=51872639
// let min=9

// while(n!=0)
// {
//     d=n%10
//     n=parseInt(n/10)
//     if(d<min)
//     {
//         min=d
//     }
// }
// console.log(min)

//GCD for two numbers
// let a=56, b=38
// while(b!=0)
// {
//     r=a%b
//     a=b
//     b=r
// }
// console.log(a)

//or

// let a=56, b=38
// let min=a>b?a:b
// for(let i=min; i>=1; i--)
// {
//     if(a%i==0&&b%i==0)
//     {
//         console.log(i)
//         break
//     }
// }

//Do while
// let n=5345
// let s=0
// do{
//     let d=n%10
//     s=s+d
//     n=parseInt(n/10)
// }
// while(n!=0){
//     console.log(s)
// }