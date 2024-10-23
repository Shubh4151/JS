//Array//

// let a=[5,8,2,3,4,5,9]
// console.log(typeof a)
// console.log(a)
// a=[3, true, 'abc', null, undefined]
// console.log(a)

 //starting examples//
// let a=[5,6,3,4,6,7,8]
// console.log(a)
// let arr=new Array(8,2,4,6,5)
// console.log(arr)
// a1=new Array(5)
// console.log(a1)

//Accesing data from Array
// a=[5,6,3,4,6,7,8]
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i])
// }

//or
//using while
// let index=0
// while(index<a.length)
// {
//     console.log(a[index])
//     index++
// }

//or
//using for in
// for(let i in a)
// {
//     console.log(a[i])
// }

//or
//using for of
// for(let e of a)
// {
//     console.log(e)
// }

//Sum of array elements
// a=[1,2,3,4,5]
// s=0
// for(let i in a)    //for in
// {
//     s=s+a[i]
// }
// console.log(s)
 
//or 
// a=[1,2,3,4,5]
// s=0
// for(let e of a)    //for of
// {
//     s=s+e
// }
// console.log(s)

//Display index position of index element if not found -1
// let a=[5,7,8,6,4,3,1]
// let f=true 
// let k=1
// for(let i in a)
// {
//     if(k==a[i])
//     {
//         f=false
//         console.log(i)
//         break
//     }
// }
// if(f)
// {
//     console.log(-1)
// }


//find prime no in given array
// let a=[5,7,6,5,4,3]
// for(let e of a)
// {
//     let f=true
//     for(let i=2;i<e;i++)
//     {
//         if(e%i==0)
//         {
//             f=false
//             break
//         }
//     }
//     if(f)
//     {
//         console.log(e)
//     }
// }

//find how many times elemnts in array repeated
// let a=[5,7,3,6,3,5,4,3,3,4,1]
// let k=3, c=0
// for(let e of a)
// {
//     if(e==k)
//     {
//         c++
//     }
// }
// console.log(c)


//find min and max no in array
// let a=[5,6,3,4,6,7,8]
// let min=max=a[0]
// for(let e of a)
// {
//     if(e<min)
//     {
//         min=e
//     }
//     else if (e>max)
//     {
//         max=e
//     }
// }
// console.log(min,max)


///Array Operations////

//Adding elements into array
// let a=[6,3,4,1,9,8]
// a.push(7)
// console.log(a)

//Adding element at index position
// let a=[6,3,4,5,7]
// a[a.length]=10
// console.log(a)

// let a=[6,3,4]
// a[10]=25
// console.log(a)

//Element replacement at index position
// let a=[6,3,4]
// a[1]=25
// console.log(a)


//Spread Operator
// let a=[6,3,4]
// a=[...a,25]
// console.log(a)


//Adding element at specific index position
// let a=[6,8,2,3,9]
// //a.splice(2,0,12)
// //a.splice(2,10,12)
// //a.splice(0,0,23)
// //a.splice(2,0,34,56,67)
// //a.unshift(20)
// console.log(a)


//Deleting elements from array  we use pop method

// let a=[]
// console.log(a.pop())

// let a=[5,7,3,56,7,8]
// console.log(a.pop())
// console.log(a)

//Delete element from beginning we use shift method
// let a=[]
// console.log(a.shift())

// a=[5,7,3,56,7,8,3]
// console.log(a.shift())
// console.log(a)


//Delete element from specific index we use splice method
// let a=[5,7,3,4,5,7,8]
// console.log(a.splice(2,3))
// console.log(a)

//Updating element in array
// let a=[5,7,3,4,5,7,6]
// a[3]=25
// console.log(a)

//Updating multiple elements
// let a=[5,7,3,4,5,7,6]
// a.splice(2,4,100,101,102,103)
// console.log(a)


//Searching elements in array
// let a=[7,3,7,6,4,1,2]
// console.log(a.includes(4))
// console.log(a.includes(9))
// console.log(a.includes(7,1))
// console.log(a.includes(7,4))

//Searching element at index position
//let a=[7,3,7,6,4,1,2]
// console.log(a.indexOf(6))
// console.log(a.indexOf(68))
// console.log(a.indexOf(7))
// console.log(a.indexOf(7,1))
// console.log(a.indexOf(7,3))
//console.log(a.lastIndexOf(7))


//Sorting of array elements

//string based sorting
//let a=[45,9,34,356,4576,23,15678,43]
//a.sort()
// a.sort((x,y)=>x-y)
//a.sort((x,y)=>y-x)
//console.log(a)


//Delete all negative numbers from array
// let a=[5,-6,-8,9,-3,-5,3,4,-5,6,-8]
// let i=0
// while(i<a.length)
// {
//     if(a[i]<0)
//     {
//         a.splice(i,1)
//     }
//     else
//     {
//         i++
//     }
// }
// console.log(a)

//Delete all duplicate numbers in array
// let a=[5,7,4,3,4,5,4,7,3,2]
// for(i=0;i<a.length-1;i++)
// {
//     let j=i+1
//     while(j<a.length)
//     {
//         if(a[i]==a[j])
//         {
//             a.splice(j,1)
//         }
//         else
//         {
//             j++
//         }
//     }
// }
// console.log(a)

//Rotate first k elements from left to right in array
// let a=[5,7,4,3,9,6]
// let k=3
// for(let i=1;i<=k;i++)
// {
//     a.push(a.shift())
// }
// console.log(a)

//or

// let a=[5,7,4,3,9,6]
// let k=3
// for(let i=1;i<=k;i++)
// {
//     x=a.shift()
//     a.push(x)
// }
// console.log(a)

//Display 2nd largest element in array
// a=[1,3,5,7,9,3,5,7,2]
// min=max=a[0]
// for(let i=0;i<a.length;i++)
// {
//     if(a[i]>max)
//     {
//         min=max
//         max=a[i]
//     }
//     else if(a[i]>min&&a[i]!=max)
//     {
//         min=a[i]
//     }
// }
// console.log(min)

//or

// let a=[5,7,4,9,3,9,6]
// a.sort((x,y)=>y-x)
// for(let i=0;i<=a.length-1;i++)
// {
//     if(a[i]!=a[i+1])
//     {
//         console.log(a[i+1])
//         break
//     }
// }

//or
//using set method
// let a=[6,5,41,2,23,4,5,6]
// console.log(...new set(a))


//Display which element was repeated highest no of times in array
// let a=[6,2,6,8,6,4,2,3,6,5]
// let x=[...new Set(a)]
// let mc=1, e=a[0]
// for (let i=0;i<x.length;i++)
// {
//     let k=x[i], c=0
//     for (let j=0;j<a.length;j++)
//     {
//         if(a[j]==k)
//         {
//             c++
//         }
//     }
//     if(c>mc)
//     {
//         mc=c
//         e=k
//     }
// }
// console.log(e,mc)


////Count the no of pairs that satisfies(a[i]+a[j]=k) where i<j
// let a=[5,3,7,2,1,4,2,6]
// let k=8, c=0
// for (let i=0;i<a.length-1;i++)
// {
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]+a[j]==k)
//         {
//             c++
//         }
//     }
// }
// console.log(c)


//Shift all 0's to ending from given array
//let a=[0,0,4,6,2,0,0,7,0,3,0]
// let i=0 
// for(let j=0;j<a.length;j++)
// {
//     if(a[j]!=0)
//     {
//         a.splice(i,0,a.splice(j,1)[0])
//         i++
//     }
// }
// console.log([a])

//or
// c=0
// for(let i=0;i<a.length;)
// {
//     if(a[i]==0)
//     {
//         c++
//         a.splice(i,1)
//     }
//     else{
//         i++
//     }
// }
// for(let i=0;i<c;i++)
// {
//     a.push(0)
// }
// console.log(a)


//Shift all -ve no to beginning of array
// a=[0,-3,4,6,-2,10,-7,7,-4,-1]
// for(let i=0, j=0;j<=a.length;j++)
// {
//     if(a[i]<0)
//     {
//         a.splice(i,0,a.splice(j,1)[0])
//         i++
//     }
// }
// console.log([a])



//Array to string conversion
// a=[5,6,7,-45,32]
// console.log(a.toString())

//Math Function
//min Max
// let a=[6,8,345,16,43,74,6765,56,7]
// console.log(Math.min(...a))
// console.log(Math.max(...a))


//Array Concatination method(multiple arrays)
// let a=[5,8,3,6,5,7]
// let b=[5,9,1,2,3,4,5,6,7]
// let c=[6,7,8,9,12]
// let r=[...a,...b,...c]
// console.log(r)
// //or
// let rs=a.concat(b,c)
// console.log(rs)

//Reaverse Array Elements
// let a=[1,2,3,4,5,6,7,8,9]
// a.reverse()
// console.log(a)

//To extract sub arrays from given array
// let a=[1,2,3,4,5,6,7,8,9]
// console.log(a.slice(4))
// console.log(a.slice(2,6))



//////////Array Methods//////////
// let a=[5,8,3,5,7,8,2,3,9]
// let x=a.toSpliced(3,0,6,3,5)
// console.log(x)
// let y=a.toSorted(((x,y)=>x-y))
// console.log(y)
// let z=a.toReversed()
// console.log(z)



///////////// Nested Array //////////////////
// let a=[[4,5,6,2],[5,8,7],[7,1,3]]
// console.log(a[0])
// console.log(a[1])
// console.log(a[0][3])
// console.log(a[2][1])
// console.log(a.length)
// console.log(a[0].length)
// console.log(a[1].length)

//or

// for(let i=0;i<a.length;i++)
//     {
//         for(let j=0;j<a[i].length;j++)
//         {
//             console.log(a[i][j])
//         }


        // for(let i=0;i<a.length;i++)
        // {
        //     console.log(...a[i])
        // }


        // for(let i in a)
        // {
        //     for(let j in a[i])
        //     {
        //         console.log(a[i][j])
        //     }
        // }

        // for (row of a)
        // {
        //     for (let e of row)
        //     {
        //         console.log(e)
        //     }
        // }
//    } 


//Array.isArray Method////
// let a=[5,4.756,[6,3,4,5],6,[4,8,2,7]]
// for(let i=0;i<a.length;i++)
// {
//     if(Array.isArray(a[i]))
//     {
//         console.log(a[i])
//     }
// }


//Converting nested array into flat array
// let a=[5,4,75,[6,3,4,5],6,[4,8,2,7]]
// console.log(a.flat())
// let x=[[5,[6,5,[4,5]]],[4,7]]
// console.log(x.flat(1))
// console.log(x.flat(2))
// console.log(x.flat(3))

//multiplication without using * symbol
// let a=5
// let b=10
// let s=0
// for(let i=1;i<=b;i++)
// {
//         s=s+a
// }
// console.log(s)

//Finding mjissing no from given array
// let a=[5,8,2,7,3,6]
// m=Math.min(...a)
// n=Math.max(...a)
// for(let i=m;i<n;i++)
// {
//         if(!a.includes(i))
//         {
//                 console.log(i)
//                 break
//         }
// }

//or

// a.sort((x,y)=>x-y)
// for(let i=0;i<a.length-1;i++)
// {
//         if(a[i+1]-a[i]!=1)
//         {
//                 console.log(a[i]+1)
//                 break
//         }
// }

//Division operation without / symbol



//Display lonely integer from given array
// let a=[1,2,3,3,4,5,5,5,5]
// for(let k of [...new Set(a)])
// {
//         let c=0
//         for(let i=0;i<a.length;i++)
//         {
//                 if(a[i]==k)
//                 {
//                         c++
//                 }
//         }
//         if(c==1)
//         {
//                 console.log(k)
//                 // break
//         }
// }


//swapping numbers
// let a=[5,8,2,7,4,6]
// t=a[0]
// a[0]=a[a.length-1]
// a[a.length-1]=t
// console.log(a)


//Reverse array elements
//let a=[5,8,2,7,4,6]    //even array
//let a=[5,8,2,7,4]      //odd array
// for (let i=0,j=a.length-1;i<j;i++,j--)
// {
//         t=a[i]
//         a[i]=a[j]
//         a[j]=t
// }
// console.log(a)




