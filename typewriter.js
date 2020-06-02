const sentence = "hello there from lightouse labs";

const typewriter = function(string) {

  for (let i = 0; i < string.length; i++) {

      setTimeout(() => {
        process.stdout.write(string[i]);
      }, i * 50)
  }

  setTimeout(() => {
    console.log();
  }, sentence.length * 50);
};

typewriter(sentence);