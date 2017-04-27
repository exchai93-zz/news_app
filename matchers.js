var assert = {

  toEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Error: expected " + expected + ", got " + actual);
    } else
      console.log("It passed! You guys are awesome!");
  }
};

var check = {

  toInclude: function(container, contained) {
    if(!Array.isArray(container)) {
      throw new Error(container + ' is not an array.  Oops.');
    }
    if(container.includes(contained)) {
      console.log("It passed! You guys rock!");
    } else
      throw new Error("Unlucky! " + container + " did not contain " + contained);
  }

};

var truthy = {

  isTrue: function(assertion) {
    if(!assertion) {
      throw new Error('Oh dear :(. ' + assertion + 'is not truthy.');
    } else {
      console.log('Well done you!');
    }
  }
};
