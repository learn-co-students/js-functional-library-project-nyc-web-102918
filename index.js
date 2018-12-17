fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, cb) {
      for(let key in array){
        cb(array[key], key, array)
      }
      return array
    },

    map: function(array, callback){
	     let copy = array.slice()

	      for(let i=0; i < array.length; i++){
		        copy[i] = callback(array[i])
	       }
           return copy
},

    reduce: function(collection, callback, acc=0) {
      // let total = 0
      if(!(collection instanceof Array))
      collection = Object.values(collection)

      for(let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return total
    },


    find: function(collection, cb) {
  if (!(collection instanceof Array))
    collection = Object.values(collection)

  for (let i = 0; i < collection.length; i++){
    if (cb(collection[i])){
      return collection[i]
}
}
  return undefined
},

  filter: function(collection, cb){
    if(!(collection instanceof Array))
      collection = Object.value(collection)

      const newArr = []
      for(let i = 0; i < collection.length; i++){
        if(cb(collection[i])){
          newArr.push(collection[i])
        }
      }
      return newArr
  },

  size: function(collection){
    if(collection instanceof Array){
      return collection.length
    } else if (!(collection instanceof Array)){
      collection = Object.keys(collection).length
      return collection
    }
  },

  first: function(array, n){
    if(!n){
      return array[0]
    } else {
      return array.slice(0, n)
    }
  },

  last: function(array, n){
    if(!n){
      return array[array.length-1]
    } else {
      return array.slice(-n)
    }
  },

  compact: function(array){
    const falsey = [false, null, 0, "", undefined, NaN]
    let newArr = []
    for(let i = 0; i < array.length; i++){
      if(!falsey.includes(array[i])){
        newArr.push(array[i])
      }
    }
    return newArr
  },

  sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

  }
})()

fi.libraryMethod()
