setTimeout(function(){
    console.log("This comes first");
  }, 0);
  // Here we’ve set the timer to zero. But this doesn’t mean “call right away.” It just means “put this in the queue right away.”
  console.log("This comes second");
  //output in console
  // "This comes second"
  // "This comes first"


  const timer  = function(){
    let start = Date.now();
    setTimeout(function(){
      let end = Date.now();
      console.log( "Duration: " + (end - start) )
    },10000);
  };
  timer();

  timer();

    timer();

    timer();
  // Console output when invoked several times:
  // "Duration: 1007"
  // "Duration: 1000"
  // "Duration: 1002"
  // "Duration: 1004"