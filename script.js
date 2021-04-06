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
const filled = arr2.fill(11, 2)
pFill.innerHTML = filled

//function filter; return an array with elements passed the callback func

const arr3 = [1, 4, 9, 11, 14]
const filterFunc = item => item % 2 === 0
const pFilter = document.querySelector('.filter1')
pFilter.innerHTML = arr3.filter(filterFunc)

//function find; return the first item, which meets the condition, from an array

const arr4 = ['a', 'ab', 'abc', 'abcd']
const findItem = item => item.length >= 2
const pFind = document.querySelector('.find1')
pFind.innerHTML = arr4.find(findItem)

//function findIndex; return the index of the first item, which meets the condition, from an array
const arr5 = [1, 3, 5, 9, 11]
const pFindIndex = document.querySelector('.findindex1')
const fIndex = item => item === 10
pFindIndex.innerHTML = arr5.findIndex(fIndex)


