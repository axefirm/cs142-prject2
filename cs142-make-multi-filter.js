// Invoking cs142MakeMultiFilter() with originalArray = [1,2,3] returns a function, saved in the variable arrayFilterer1,
//that can be used to repeatedly filter the input array

function cs142MakeMultiFilter(originalArray){
  var currentArray = originalArray;
  console.log(originalArray);
  console.log(currentArray);
  function arrayFilter (filterCriteria, callback) {
         if(typeof filterCriteria !== "function") {
             return currentArray;
         }
         // console.log("function mun.");
        currentArray = currentArray.filter(filterCriteria);
        if( typeof callback ==="function"){
          callback.call(originalArray, currentArray);
        }
        return arrayFilter;
      }
      return arrayFilter;
}
