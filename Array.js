// question 1 second largest number in array


// function secondlargest(arr){
// const uniqarr = Array.from(new Set(arr));//O(n)

// uniqarr.sort((a,b)=> b-a);

// if(uniqarr.length >=2){//O(nlogn)
//     return uniqarr[1];
// }else{
//     return -1
// }


// }
// console.log(secondlargest(arr));

function insertelement(){
    let data = [20,30,10,67,40];
    let newel = document.getElementById('newel').value;

    let position = document.getElementById('position').value;
    for (let i = data.length-1; i>=0; i--){
        if(i>= position){
            data[i+1] = data[i]
        } if(i == position){
            data[i] = newel;
        }
    }
    return data;
    

}
console.log(insertelement())