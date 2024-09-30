
//pick method
// interface user{
//     name:string,
//     age:number,
//     email:string,
// }

// type updateuser=Pick<user,'name'|'age'>


// function concating(user1:updateuser):string{
//    const name=`Name ${user1.name} and the age is:${user1.age}`;
//    return name;
// }

// const res=concating({
//     name:"akramsulthan",
//     age:25
// });

// console.log(res);


//partial method
// interface data1{
//     name:string,
//     age:number,
//     model:string,
//     year:number,
// }

// type users=Partial<data1>

// function printing(data2:users):void{
//     console.log(data2);
// }

// printing({name:"akramsulthan",age:22,year:2002});





//readonly method
// interface temp{
//     //readonly name:string,
//     name:string
//     age:number,
//     email:String,
//     id:number
// }

// const ans:Readonly<temp>={
//     name:"akram",
//     age:10,
//     email:"akramsulthan",
//     id:74
// }

//creating normal method for object
// type user={
//     [key:number]:string
// }

// const data:user={
//     1:"akramsultba",
//     2:"mohammed akram sulthan"
// }

//creating object using  records
// type users=Record<number,string>
// const temp:users={
//     1:"akramsulthan",
//     2:"harkirat singh"
// }
// console.log(temp);

//creating objects using map
// type user={
//     name:string,
//     age:number,
//     email:string,
//     addresS:string
// }

// type optionalData=Partial<user>;

// const userMap=new Map<number,optionalData>();

// //add data
// userMap.set(1,{name:"akram",email:"akramsulthan"});
// userMap.set(2,{age:24});

// console.log(userMap.get(2));


// //exclude method
// type someTypes='click'|'scroll'|'move'

// type selcetedtype=Exclude<someTypes,'move'>;

// const data=(event:selcetedtype)=>{
//     console.log(`the even occured is ${event}`);
// }
// data('click');

