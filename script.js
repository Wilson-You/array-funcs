//concatenate two arrays
const origin = ['a', 'b', 'c']
const toBeConcat = [1, 2, 3]
const pConcat = document.querySelector('.concat1')
pConcat.innerHTML = origin.concat(toBeConcat)

//concatenate three arrays; return a new array
const origin2 = ['a', 'b', 'c']
const toBeConcat2 = [1, 2, 3]
const toBeConcat3 = ['eins', 'zwei', 'drei']
const pConcat2 = document.querySelector('.concat2')
pConcat2.innerHTML = origin.concat(toBeConcat2, toBeConcat3)

//function every; return true or false
const arr1 = [4, 3, 5, 9, 11]
const aboveEight = item => item > 10
const pEvery = document.querySelector('.every1')
pEvery.innerHTML = arr1.every(aboveEight);


//function fill; return a modified array
const arr2 = [1, 2, 3, 4, 5]
const pFill = document.querySelector('.fill1')
const filled = arr2.fill(11, 2, 5)
pFill.innerHTML = filled
console.log(arr2);


