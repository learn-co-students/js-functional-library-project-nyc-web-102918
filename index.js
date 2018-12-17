fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
         for(let key in collection){
           iteratee(collection[key], key, collection )
         }
       return collection
     },

     map: function(collection, iteratee) {
       let result = [];

       for(let key in collection){
           result.push(iteratee(collection[key], key, collection))
         }
       return result
     },

    reduce: function(collection, callback, acc = 0) {
      for (let key in collection) {
        acc = callback(acc, collection[key], collection)
        console.log(acc)
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
      let result = []
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key])
        }
      }
      return result
    },

    size: function(collection) {
      let size = 0
      for (let key in collection) {
        size++
      }
      return size
    }

  }
})()

fi.libraryMethod()
