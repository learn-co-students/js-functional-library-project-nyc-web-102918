const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
            for(let i = 0; i < Object.values(collection).length; i++) {
              let obj = Object.values(collection)
	            callback(obj[i])
            } return collection
//             const myEach = function (array) {
// 	for( let i = 0; i < array.length; i++)
// 	alert(array[i])
// }I got this to work in the console???
    },

    map: function(collection, callback) {
      let obj = Object.values(collection)
      let newArray = []
      for(let i=0; i < obj.length; i++) {

        newArray[i] = callback(obj[i])
        // return newArray
      }
      // for (let key in collection){
      //
      // }
return newArray
    },

    reduce: function(collection, callback, acc=0) {
      for (let key in collection) {
        acc = callback(acc, collection[key], collection)
        // console.log(acc)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let key in collection) {
        if (predicate(collection[key])) {
             return collection[key]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = []
      for (let key in collection) {
        if (predicate(collection[key])) {
          newArr.push(collection[key])
        }
      }
      return newArr
    },

    size: function(collection) {
      let length = 0
      for (let key in collection) {
        length++
      }
      return length
    },

    first: function(collection, n) {
        if (!n) {
          return collection[0]
      } else {
          return collection.slice(0, n)
      }
    },

    last: function(collection, n) {
        if (!n) {
          return collection[collection.length-1]
        } else {
          return collection.slice(-n)
        }
    },

    compact: function(collection) {
      let newArr = []
      for (let v in collection) {
        if (collection[v]) {
          newArr.push(collection[v])
        }
      }
      return newArr
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    }

    // flatten: function(collection, n=null) {
    //   return collection.reduce((accumulator, value) => Array.isArray(value) ? accumulator.concat(value) : accumulator.concat(value), [])
    //  }
    // }
  // uniq: function()

  }

})()

// fi.libraryMethod()
