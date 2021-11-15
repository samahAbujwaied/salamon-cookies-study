'use strict '

let array = [2, 8, 5, 4];
function nextNum(array) {
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            newarr.push(array[i]);
        }
    }
    if (array[array.length - 1] < array[array.length - 2]) {
        newarr.push(array[array.length - 1])
    }
    return newarr;
}
console.log(nextNum(array));


function check(s1, s2) {

    let a = s1[0], b = s2[0];
    for (let i = 1; i < s1.length; i++) {
        if (s1[i] != s1[i - 1])
            a += s1[i];

    }
    for (let i = 1; i < s2.length; i++) {
        if (s2[i] != s2[i - 1])
            b += s2[i];

    }
    if (a = b)
        return 'yes'
    else
        return 'no'
}
let str1 = 'sammah', str2 = 'samah';
console.log(check(str1, str2));



function shuffled(array, idx) {
    let firstPart = [];
    let secondPart = [];
    let final = [];
    for (let i = 0; i < idx; i++) {
        firstPart.push(array[i])
    }
    for (let j = idx; j < array.length; j++) {
        secondPart.push(array[j])
    }
    for (let k = 0; k < firstPart.length; k++) {
        final.push(secondPart[k], firstPart[k])
    }
    return final;
}
let arr = [1, 2, 3, 4, 5, 6]
let ind = 3;
console.log('shuffled', shuffled(arr, ind));


function number(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i])
            min = arr[i];
        if (max < arr[i])
            max = arr[i];

    }
    let newar = [];
    let flag = false;
    for (let j = min; j <= max; j++) {
        for (let k = 0; k < arr.length; k++) {
            if (j == arr[k]) {
                flag = true;
            }

        }
        if (flag) {
            flag = false;
            continue;
        }
        newar.push(j);


    }
    return newar;
}
console.log('nymbers  ', number([0, 5, 4, 9, 3]));


function combind(array) {
    let count = 0;
    let newarr = [];
    newarr.push(array[0])
    for (let i = 1; i < array.length - 1; i++) {
        count++;
    }
    newarr.push(count)
    newarr.push(array[array.length - 1])
    return newarr;
}

console.log('combind', combind('Jacdddddddddddddk'));


function repeated(array) {
    let arr = [];
    let count = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i - 1]) {
            count++;
            console.log('gggggg');
        }
        else if (count > 1) {
            arr.push(array[i - 1], '-', count);
            count = 1

        }


    }
    return arr;
}

console.log('repeated', repeated('weeyooozzoooo'));

function primery(a, b) {
    for (let i = a; i <= b; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}

console.log('primery', primery(1, 20));

function cube(n)
 {
 let num =[n].toString();
 let res=0 ;
   for (let i = 0; i < num.length; i++) {
       
       res += num[i]*num[i]*num[i];
   }
 if(res === n)
 return true;
 else 
 return false ;
}
console.log('cube', cube(153));

function reverseNumber(number) {
    var revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
    }
    return revNumber;
  }
  console.log(reverseNumber(876));


  function findUnique(str){
    let uniq = "";
     
    for(let i = 0; i < str.length; i++){
      if(uniq.includes(str[i]) === false){
        uniq += str[i]
      }
    }
    return uniq;
  }
   
  console.log(findUnique("Geeksforgeeks"))


function count(array) {
    
    let countt = 0;
     let res = [];
    for (let i = 0; i < array.length; i++) {
         
        let ch = array[i];
        for (let j = 0; j < array.length; j++) {
           if(ch==array[j])
           {
               countt++;
           }
            
        }
         res.push('the ', ch, 'have ',countt)
         countt=0;
    }
    return res;
}

  console.log('count',count('saaammaah'));

  function repeated(array) {
      
    let newarr =[];
    let sum =0;
    for (let i = 0; i < array.length; i++) {
        
        if(array[i]==array[i-1])
        {
            sum+= array[i];
            console.log('sum =',sum);
        }else {
            sum = array[i];
           
        }
        
        newarr.push(sum);
       
        
    }
    return newarr;
  }


  console.log('repeated ',repeated([2,2,2,7,3,3,1,2]));