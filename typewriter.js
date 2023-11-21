const sentence = "We still have one last thing to implement. It would be nice of the program to output a newline character before exiting, so that the next prompt starts on its own line.";
let timer = 0;
for (const char of sentence) {
  //console.log(char);
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}
process.stdout.write("\n");