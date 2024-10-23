//Display 1 to n
// let n=10
// for(let i=1;i<=n;i++)
// {
//     console.log(i)
// }

//even no betn 1 to n
// n=20
// for(let i=1;i<=n;i++)
// {
//     if(i%2==0)
//     console.log(i)
// }

// let n=20
// for(i=1;i<n;i++){
//     if(i%2==0&&i%4!=0)
//         console.log(i)
// }

// let n=20
// for(i=1;i<n;i++){
//     if(i%4==0)
//     console.log(i)
// }

//Display sum of 1 to n numbers
// let n=5
// s=0
// for(let i=1;i<=n;i++)
// {
//     s=s+i
// }
// console.log(s)

// display product of 1 to n
// let n=5
// let f=1
// for(let i=1;i<=n;i++)
// {
//     f=f*i
// }
// console.log(f)


//Display first n terms in Fibonacci sequence
// let n=9
// let a=-1
// let b=1
// for(let i=1;i<=n;i++)
// {
//     c=a+b
//     console.log(c)
//     a=b
//     b=c
// }

//Display all factors for given no
// let n=12
// for(i=1;i<=n;i++)
// {
//     if(n%i==0){
//         console.log(i)
//     }
// }

//Display no of factors for given no
// let n=12
// for(i=1;i<=n;i++)
// {
//     if(n%i==0){
//         console.log(i)
//     }
// }

//sum of factors
// let n=50, s=0
// for(i=1;i<=n;i++){
//     if(n%i==0){
//         s=s+i
//     }
// }
// console.log("sum is: " + s)
// console.log("No of iteratins:" +i)

//Even no betn m to n
// let m=40; n=70
// for(i=m;i<=n;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//sum of given digit using for as while
// let n=4583, s=0, c=0
// for(;n!=0;)
// {
//     d=n%10
//     n=parseInt(n/10)
//     s+=d
// }
// console.log(s)

let n=10
for(let i=1;i<=10;i++)
{
    //for(let j=1;j<=10;j++) //1-10
    for(let i=1,j=20;i<j;i++,j--)
    {
        console.log(i,j)
        if(j%3==0)
        {
            break
        }
    }
}
