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

//function every; returns true or false; it accepts one func as its required param and a thisArg obj as its optional param; the func param contains three params, the current item, its index, and the arr; only the current item is required; an empty array calling every func will always return true

const arrForEvery = [4, 3, 5, 9, 11]
const inRangeObj = { min: 0, max: 15 }
const aboveEight = item => item > 10
function inRange(item) {
    return item > this.min && item < this.max
}
const pEvery = document.querySelector('.every1')
const aboveEightResult = arrForEvery.every(aboveEight)
const inRangeResult = arrForEvery.every(inRange, inRangeObj)
pEvery.innerHTML = 'Method every returns values for two situations, one with thisArg and another without thisArg:  ' + aboveEightResult + ', ' + inRangeResult;
console.log([].every(item => item > 0))
console.log([].every(item => item < 0))


//function fill; return a modified array; three parameters: (value, startIndex, endIndex)
const arr2 = [1, 2, 3, 4, 5]
const pFill = document.querySelector('.fill1')
const filled = arr2.fill(11, 2)
pFill.innerHTML = 'Method Fill fills the array with 11 starting from index 2 and returns a new array:' + filled

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

//function findIndex; return the index of the first satisfied item, or -1 if not found
const arr5 = [1, 3, 5, 9, 11]
const pFindIndex = document.querySelector('.findindex1')
const fIndex = item => item === 10
pFindIndex.innerHTML = arr5.findIndex(fIndex)

//function flat; return an array with all sub-array elements concatenated to it recursively to the specified depth
const arr6 = [1, 2, ['a', 'b'], ['c', 'd'], [[[9, 10]]]]
const pFlat = document.querySelector('.flat1')
pFlat.innerHTML = arr6.flat(3);

//function flatMap; map the array first and then flat it
const arr7 = [1, 2, 4, 5]
const pMapflat = document.querySelector('.flatmap1')
const callback = item => [item + 1]
pMapflat.innerHTML = arr7.flatMap(callback)

//function forEach; 
const arr8 = [3, 4, 7, 8]
const pForEach = document.querySelector('.foreach1')
const callback2 = item => item - 1
pForEach.innerHTML = arr8.forEach(callback2)

//function includes; return true or false
const arr9 = [1, 3, 5, 7]
const pIncludes = document.querySelector('.includes1')
pIncludes.innerHTML = arr9.includes(7)

//function indexOf; retrun the index or -1
const arr10 = [2, 9, 11, 87]
const pIndexOf = document.querySelector('.indexof1')
pIndexOf.innerHTML = arr10.indexOf(87)

//isArray; return true or false
const arr11 = [1, 2]
const pIsArray = document.querySelector('.isarray1')
pIsArray.innerHTML = Array.isArray(arr11)

//join; convert an array into a string; the default seperator is ','; you can specify a seperator; returns an empty string if the array is empty
const arr12 = ['a', 'pp', 'l', 'e']
const pJoin = document.querySelector('.join1')
pJoin.innerHTML = 'Method join returns: ' + arr12.join('-')
console.log([].join(','));

//from; convert a string into an array
const str1 = 'apple'
const pFrom = document.querySelector('.from1')
pFrom.innerHTML = Array.from(str1)
console.log(Array.from(str1));

//lastIndexOf; return the index of the last item found in the array
const arr13 = [1, 2, 4, 9, 11, 4, 15]
const pLastIndexOf = document.querySelector('.lastindexof1')
pLastIndexOf.innerHTML = arr13.lastIndexOf(4)

//map; return an array with the results of calling a callback fun
const arr14 = ['a', 'ab', 'aba', 'bcb']
const pMap = document.querySelector('.map1')
const callback3 = item => item + 'dog'
pMap.innerHTML = arr14.map(callback3)
console.log(arr14.map(callback3));

//pop; remove the last item from an array
const arr15 = ['first', 'middle', 'last']
const pPop = document.querySelector('.pop1')
pPop.innerHTML = arr15.pop()
console.log(arr15);

//push; add one or more elements to the end of an array
const arr16 = ['enis', 'zwei']
const pPush = document.querySelector('.push1')
pPush.innerHTML = arr16.push('drei', 'vier')
console.log(arr16)

//reduce; produces a single value with an input array; use this func to count how many repetions for each item in an arr
const arr17 = [1, 2, 3, 4]
const reducer = (accumulator, curValue) => {
    console.log('accu', accumulator);
    console.log('cur', curValue);
    return accumulator + curValue
}
const pReduce = document.querySelector('.reduce1')
pReduce.innerHTML = 'Method reduce: returns ' + arr17.reduce(reducer)

console.log([1, 2, 3, 4, 5].reduce((accumulator, currentVal, index, arr) => {
    console.log(`accumulator is ${accumulator}; curretValue is ${currentVal}; index is ${index}; arr is ${arr}`);
    return accumulator + currentVal
}));
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
const count = (tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1
    return tally
}
const result = fruitBasket.reduce(count, {})

const result2 = fruitBasket.reduce((tally, fruit) => {
    if (!tally[fruit]) {
        tally[fruit] = 1
    } else {
        tally[fruit] = tally[fruit] + 1
    }
    return tally;
}, {})

const nestedArr = [['a', 'b'], [11, 14], ['qf', 'jy']]
const result3 = nestedArr.reduce((initial, nestedItem) => {
    return initial.concat(nestedItem)
}, [])

console.log(result)
console.log(result2)
console.log(result3)
console.log(nestedArr.flat())




//reverse; reverse an array
const arr18 = ['a', 'b', 'c']
const pReverse = document.querySelector('.reverse1')
pReverse.innerHTML = arr18.reverse()
console.log(arr18);

//shift; remove the first element from an array and return that element
const arr19 = ['begin', 'middle', 'last']
const pShift = document.querySelector('.shift1')
pShift.innerHTML = arr19.shift()

//slice; shallow copy a portion of an array into a new array; the original array unchanged
const arr20 = ['a', 'ab', 'abc', 'abcd', 'ef']
const pSlice = document.querySelector('.slice1')
pSlice.innerHTML = arr20.slice(1, 3)

//some; test whether at least one element in an array passes the provided function; if the array is empty, the some always return false; refer to every
const arr21 = [1, 2, 5, 8]
const pSome = document.querySelector('.some1')
const callback4 = item => item % 2 === 0
pSome.innerHTML = 'Method some: returned ' + arr21.some(callback4)
console.log([].some(item => item > 0))
console.log([].some(item => item < 0))

//sort; return an sorted array
const arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pSort = document.querySelector('.sort1')
pSort.innerHTML = arr22.sort((a, b) => a - b)

//splice; returns an array with the deleted item(s); three kinds of params; delete first and then ad
const arr23 = ['initial', 'middle', 'end']
const pSplice = document.querySelector('.splice1')
pSplice.innerHTML = arr23.splice(1)
console.log(arr23)

//toString; convert an array to a string
const arr24 = ['a', 'b', 'c']
const pToString = document.querySelector('.tostring1')
pToString.innerHTML = arr24.toString()

//unshift; add elements to the beginning of an array and return the length of the array
const arr25 = ['third', 'fourth']
const pUnshift = document.querySelector('.unshift1')
pUnshift.innerHTML = arr25.unshift('first', 'second')
console.log(arr25);


const data = ["Ali", "Billy", "Hali", "Dali", "Ali", "Billy", "Hali", "Dali", "Ali", "Billy", "Hali", "Dali", "Sily"]
const finalre = data.reduce((acc, item) => {
    acc[item] ? acc[item]++ : acc[item]=1
    return acc
}, {})

console.log(finalre);