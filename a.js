//167

/*
№1
*/
for (let i=1; i<=100; i++){
    console.log(i);
}

/*
№2
*/
for(let i=100; i>=1; i--){
    console.log(i);
}

/*
№3
*/
for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}

/*
№4
*/

let arr=[];
for(let i=1; i<=10; i++){
    arr.push('x');
}
console.log(arr);

/*
№5
*/
let arr1=[];
for(let i=1; i<=10; i++){
    arr1.push(i);
}
console.log(arr1);

/*
№6
*/
let arr2=[1, 2, 3, 4, -1];
for( let elem of arr2){
    if (elem>0 && elem<10){
        console.log(elem);
    }
}

/*
№7
*/
let arr3=[1, 2, 3, 4, -1];
let flag=false;
for (let elem of arr3){
    if (elem ==5){
        flag=true;
        break;
    }
}
if(flag===true){
    console.log("В массиве есть 5")
}else {
    console.log("В массиве нет 5")
}

/*
№8
*/
let arr4=[1, 2, 3, 4, -1];
let summ=0;
for(let elem of arr4){
    summ+=elem;
}
console.log(summ);

/*
№9
*/
let arr5=[1, 2, 3];
let summ1=0;
for(let elem of arr5){
    summ1+=elem**2;
}
console.log(summ1);

/*
 № 10
 */
let arr6=[1, 2, 3];
let cout=0;
let summ2=0;
for (let elem of arr6){
    summ2+=elem;
    cout+=1;
}
console.log(summ2/cout);

/*
№11
*/
let num=4;
let factorial=1;
for (let i=1; i<=num; i++){
    factorial*=i;
}
console.log(factorial);

/*
№12
*/
 let arr7 =[];
 for (let i=10; i>=1; i--){
    arr7.push(i);
 }
console.log(arr7);

/*
№13
*/
let arr8=[1, 2, 3, 4, -1];
let summ3=0;
for (let elem of arr8){
    if (elem >0){
        summ3+=elem;
    }
}
console.log(summ3);

/*
№14
*/

let arr9 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr9){
    if (String(elem)[0]==1 || String(elem)[0]==2 || String(elem)[0]==5){
        console.log(elem);
    }
}

/*
№15
*/
let arr10 = [1, 2, 3, 4, -1];
for (let i = arr10.length-1; i>=0; i--){
    console.log(arr10[i]);
}
