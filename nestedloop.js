// for(i=1;i<=5;i++)
// {
//     for(let j=1;j<=5;j++){
//         console.log(i,j)
//     }
// }
// console.log("end of j loop")

////////////Prime Number///////////
// let n=9
// for(let i=2;i<=n;i++){
//     let f=true
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             f=false
//             break
//         }
//         if(f){
//             console.log(i)
//         }
//     }
// }


//Prime factors for given no//////
// let n=16
// for(let i=2;i<=n;i++){
//     if(n%i==0){
//         let f=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 f=false
//                 break
//             }
//         }
//         if(f){
//             console.log(i)
//         }
//     }
// }

/////Count prime numbers betn m to n///////
// let m=10, n=50, c=0
// for(let i=m;i<=n;i++)
// {
//     let f=true
//     for(let j=2;j<i;j++)
//     {
//         if(i%j==0)
//         {
//             f=false
//             break
//         }
//     }
//     if(f)
//     {
//         c++
//     }
// }
// console.log(c)


////Display individual digits until single digit////
// let n=3928
// while(n>9)
// {
//     let s=0
//     while(n!=0)
//     {
//         s+=n%10
//         n=parseInt(n/10)
//     }
//     n=s
// }
// console.log(n)

//or

// let n=3928
// let r=n%9
// if(r==0)
// {
//     r=9
// }
// console.log(r)


///no is divisible by 9////
// n=65748
// let r=n%9
// if(r==0){
//     r=9
// }
// console.log(r)

//Display nth prime number///
// let n=10,c=0,i=2
// while(true)
// {
//     let f=true
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             f=false
//             break
//         }
//     }
//     if(f){
//         c++
//         if(c==n){
//             console.log(i)
//             break
//         }
//     }
//     i++
// }
