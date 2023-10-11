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

/*
№16
*/
let arr11=[1, 5, 3, 4, -1];
for (let i=0; i<arr11.length; i++){
    if(arr11[i]==i+1){
        console.log(arr11[i])
    }
}

/*
№17
*/
let arr12=[1, 2, 3, 4, -1];
for (let i=0; i<arr12.length; i++) {
    document.write(arr12[i] + '<br>');
}

document.write('<br>');

/*
№18
*/
let arr13=[1, 2, 3, 4, -1];
for (let i=0; i<arr12.length; i++) {
    document.write("<p>"+arr12[i] + '</p>');
}

document.write('<br>');

/*
№19
*/
let arr14= ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for(let i =0; i<arr14.length; i++){
    if(arr14[i] == 'сб' || arr14[i] == 'вс'){
        document.write("<strong>" + arr14[i]+"</strong>"+' ')
    }else{
        document.write(arr14[i]+' ');
    }
}

document.write('<br><br>');

/*
№20
*/
let arr15= ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let day = "сб";
for(let i =0; i<arr15.length; i++){
    if(arr15[i]==day){
        document.write('<em>'+arr15[i]+'</em>'+' ')
    }else{
        document.write(arr15[i]+' ')
    }
}

/*
№21
*/
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj){
    obj[key]+=obj[key]*0.1;
}
console.log(obj);

/*
№22
*/
let obj1 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for(let key in obj1){
    if(obj1[key]<=400){
        obj1[key]+=obj1[key]*0.1;
    }
}
console.log(obj1);

/*
№23
*/
let arr16 = [1, 2, 3, 4, 5];
let arr17 = [6, 7, 8, 9, 10];
let obj3={};
for (let i=0; i<arr16.length; i++){
    obj3[arr16[i]]=arr17[i];
}
console.log(obj3);

/*
№24
*/
let obj4 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
sumK=0;
sumV=0;
for(let key in obj4){
    sumK+=Number(key);
    sumV+=Number(obj4[key]);
}
console.log(sumK/sumV);

/*
№25
*/
let obj5 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keys=[];
let values=[];
for(let key in obj5){
    keys.push(key);
    values.push(obj5[key])
}
console.log(keys);
console.log(values);

/*
№26
*/
let obj6 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr18=[];
for (let key in obj6){
    if(String(obj6[key]) [0]==1 || String(obj6[key])[0]==2){
        arr18.push(obj6[key]);
    }
}
console.log(arr18);

/*
№27
*/
let arr19 = ['a', 'b', 'c', 'd', 'e'];
let obj7={};
for(let i=0; i<arr19.length; i++){
    obj7[i+1]=arr19[i];
}
console.log(obj7);

/*
№28
*/
let arr20 = ['a', 'b', 'c', 'd', 'e'];
let obj8={};
for(let i=0; i<arr20.length; i++){
    obj8[`'`+arr20[i]+ `'`]=i+1;
}
console.log(obj8);
