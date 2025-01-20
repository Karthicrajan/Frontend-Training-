
let resSortObject = sortObject([{ name: 'John', age: 28 },{ name: 'Anna', age: 22 },{ name: 'Mike', age: 32 },]);
//console.log(resSortObject);

let grouparrayRes = GroupArray([1, 2, 3, 4, 5, 6]);
console.log(grouparrayRes);

const data =  [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }];
RemoveDupli(data);

let maxres = findMaxRecursive([1, 2, 2, 3, 3, 3],0);
console.log(maxres.element);

let common = findCommon([1, 2, 3],[2, 3, 4]);
console.log(common);



//task 1
function sortObject(objarr){
    objarr.sort(helperSort);
    return objarr;
}
function helperSort(a,b){
    return a.age - b.age;
}

//task 2
function GroupArray(arr){
    const obj = {
        even : [],
        odd : []
    }
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 == 0){
    //         obj.even.push(arr[i]);
    //     }else{
    //         obj.odd.push(arr[i]);
    //     }
    // }

   // let res1 = arr.forEach(i => (i % 2 == 0 ? obj.even.push(i) : obj.odd.push(i)));
    // {even : [2,4,6,],odd[1,3,5]}
   //console.log(res1);

let res2 = arr.map(i => (i % 2 == 0));
    // {even : [2,4,6],odd[1,3,5]}
    
    console.log(res2);   

    //    let res33 = arr.map(i =>  (i % 2 == 0 ? obj.even.push(i) : obj.odd.push(i)));
    //     console.log(res33);
   // {even : [2,4,6],odd[1,3,5]}

    return obj;
}


//task 3
function RemoveDupli(arrObj){
    const IdSet = new Set();
    const newArray = arrObj.filter((item) => helperRemove(item,IdSet));
    console.log(newArray);
}
function helperRemove(item,IdSet){
    if(!IdSet.has(item.id)){
        IdSet.add(item.id);
        return true;
    }else{
        return false;
    }
}




//task 4
function findMaxRecursive(arr,ind){

    if(ind >= arr.length){
        return {element : null , count : 0};
    }

    let lastind = arr.lastIndexOf(arr[ind]);
    let curCount = (lastind - ind) + 1;

    let nextCount = findMaxRecursive(arr,lastind + 1);
    
    
    return curCount > nextCount.count ? {element : arr[ind] , count : curCount} : nextCount;
    
}


//task 5
function findCommon(arr1,arr2){
    return arr1.filter((item) => arr2.includes(item));
}
let resObj = arrObjectToMap([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]);

console.log(resObj);

//task 6
function arrObjectToMap(arrobj){

    let res =  arrobj.reduce((HashMap,item) =>{
        HashMap[item.id] = item.name;
        return HashMap;
    },{})
    return res;
}

let onceRes = elementAppearOnce([1, 2, 2, 3, 4, 4, 5]);
console.log(onceRes);


//task 7
function elementAppearOnce(arr){
    if(arr.length <= 0){
        return [];
    }
    let elmLen = arr.lastIndexOf(arr[0]);
    let store = [];
    if(elmLen <= 0){
        store.push(arr[0]);
    }
    store.push(...elementAppearOnce(arr.slice(elmLen + 1)));
    return store;
}

//tast 8
let otares = objectToArray({ a: 1, b: 2 });
console.log(otares);
function objectToArray(obj){
    return Object.entries(obj);
}

//tast 9
let keysObj = objectKeyFilter({ a: 1, b: 2, c: 3},["a","b"]);
console.log(keysObj);

function objectKeyFilter(obj,seachKey){
    
    let result = Object.keys(obj).reduce((cache,itemKey) => {
        if(seachKey.includes(itemKey)){
            cache[itemKey] = obj[itemKey];
        }
        return cache;
    },{})
    return result;
}


//task 10
let mres = merge([1, 2, 3, 5],[4, 7],6);
console.log(mres);

function merge(arr1,arr2,single){
    let set = new Set([...arr1,...arr2,single]);
    let res = [...set];
    return res;
}