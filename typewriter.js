const sentence = "hello there from lightouse labs";

const typewriter = function(string) {

  for (let delay = 0; delay < string.length; delay++) {
    
      setTimeout(() => {
        process.stdout.write(string[delay]);
      }, delay * 50)
  }

  setTimeout(() => {
    console.log();
  }, sentence.length * 50);
};

typewriter(sentence);