
////// Objects /////////////
// let obj={name:'pavan',Age:'20',"Dept":'ETC',"Marks":86}
// console.log(obj)

//let obj={sid:101,name:"amar",age:20,dept:"cse",marks:85}

    //Obj accesing Statically
// console.log(obj.name,obj.marks,obj.dept)
// console.log(obj['sid'],obj['name'],obj['marks'])

    //Obj accesing dynamically
// for(let p in obj)
// {
//     console.log(obj[p])
// }



//Adding property to existing  object(for known property names)
//proprty names given statistically
    // let obj={sid:101,name:"amar",age:20,dept:"cse",marks:85}
    // obj.place='hyd'
    // obj.dept='ece'
    // console.log({...obj,'place':'hyd','age':25})

//property names receiving dynamically  
    // let obj={sid:101,name:"amar",age:20,dept:"cse",marks:85}
    // let Pn='place'
    // obj[Pn]='hyd'
    // console.log(obj)
    // let std={...obj, [Pn]:'awb'}
    // console.log(std)


//Updating existing property
    // let obj={sid:101,name:"amar",age:20,dept:"cse",marks:85}
    // obj.age=27
    // obj={...obj,name:'suman'}
    // console.log(obj)

//Deleting existing property
    // let obj={sid:101,name:"amar",age:20,dept:"cse",marks:85}
    // delete obj['age']
    // console.log(obj)

//Searching item from object
    // let obj={sid:101,name:"amar",age:20,dept:"cse",marks:85}
    // console.log(obj.place!=undefined)
    // console.log(obj.age!=undefined)


//Creating object using object class
    // let obj=new Object()
    // obj.name='kumar'
    // obj.sal=38000
    // obj.dept='hr'
    // obj.org='xyz'
    // console.log(obj)


//Creating obj using array of properties value
// let p=['pid','name','cat','price']
// let v=['p101','computer','ele','98765']
// let obj={}
// for(let i=0;i<p.length;i++)
// {
    //obj[p[i]=v[i]]
    //obj={...obj,[p[i]]:v[i]}
// }
// console.log(obj)


// let a=[{"pid":101,"name":"com","price":98000},
//     {"pid":102,"name":"mobile","price":38000},
//     {"pid":103,"name":"mouse","price":98000},
//     {"pid":104,"name":"tab","price":98000}]

// for(let i in a)
// {
//     console.log(i,a[i])
// }
// for (let i in a)
// {
//     console.log(a[i].pid)
//     console.log(a[i].name)
//     console.log(a[i].price)
//     console.log("-------")
// }

//Display product details whose price >25000
for(let i in a)
{
    if(a[i].price>25000)
    {
        console.log(a[i].pid)
        console.log(a[i].name)
        console.log(a[i].price)
        console.log("---")
    }
}