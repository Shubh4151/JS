
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

////////// Array of Objects ///////////
// let a=[{"pid":101,"name":"com","price":98000},
//     {"pid":102,"name":"mobile","price":38000},
//     {"pid":103,"name":"mouse","price":980},
//     {"pid":104,"name":"tab","price":20000}]

    //show object elements
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
// for(let i in a)
// {
//     if(a[i].price>25000)
//     {
//         console.log(a[i].pid)
//         console.log(a[i].name)
//         console.log(a[i].price)
//         console.log("---")
//     }
// }

    //Delete product with name tab
// for(let i in a)
// {
//     if(a[i].name=='tab')
//     {
//         a.splice(i,1)
//         break
//     }
// }
// console.log(a)




//Q..  Create object of student object

let a=[{"sid":101,"name":"Anu","dept":"etc","marks":93},
    {"sid":102,"name":"shubh","dept":"cse","marks":80},
    {"sid":103,"name":"Anushu","dept":"mech","marks":38},
    {"sid":104,"name":"shAnu","dept":"civil","marks":73},
    {"sid":105,"name":"Ansh","dept":"ece","marks":53}]
    
    for(let i in a)
    {
        if(a[i].marks>=70&&a[i].marks<=80)
        {
            console.log(1,a[i])
            console.log("...........")
        }
    }      
    for(let i in a)
    {
        if(a[i].dept=="cse" || a[i].dept=="ece")
            {
                console.log(2,a[i])
                console.log("...........")
            }
    } 
    for(let i in a)
    { 
        if(a[i].dept=="mech" || a[i].dept=="civil")
        {
            a.splice(i,2)
        }
    }
    console.log(a)
