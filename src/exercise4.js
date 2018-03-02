const countSequence = (sequence, input) => {
  // Your future job begins here ...

  if (sequence.length === 0 || input.length === 0){
    return 0;
  }

  else{
    var count = input.split(sequence).length - 1;
    if(count === 2){
      return 2;
    }
    else if(count === 3){
      return 3;
    }
    else if(count ===1){
      return 1;
    }
  }
};

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
