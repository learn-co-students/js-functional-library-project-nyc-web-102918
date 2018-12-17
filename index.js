const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let key in collection){
        callback(collection[key],key, collection);
      }
      return collection
    },

    map: function(collection,callback) {
      if (Array.isArray(collection)){
        let copy=[]
        for( let i=0;i<collection.length; i++){
          copy.push(callback(collection[i],i,collection));
        }
        return copy
      }
      else{
        let copy =[]
        for(let i=0;i<Object.keys(collection).length; i++){
          copy.push(callback(collection[Object.keys(collection)[i]],Object.keys(collection)[i],collection))
        }
      return copy
      }
    },

    reduce: function(collection,callback,acc=0) {
      collection.forEach(function(item){
        acc=callback(acc,item,collection)
      })
      return acc
    },

    find: function(collection,callback){
      for ( let key in collection){
        if (callback(collection[key])){return collection[key]}
      }
    },

    filter: function(collection, callback){
      const array=[]
      for ( let key in collection){
        if (callback(collection[key])){array.push( collection[key])}
      }
      return array
    },

    size: function (collection) {return  Array.isArray(collection) ? collection.length : Object.keys(collection).length}

  }
})()

fi.libraryMethod()
