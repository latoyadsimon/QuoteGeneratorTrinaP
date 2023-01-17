
// ended up not using this file
const responses = require("./responses");

function selectRandomFortune() {
  const num = Math.random() * responses.length;
  const index = Math.floor(num);
  return responses[index];
}

function welcome() {
  const message = "Ask Ms. Trina a question and she'll give you an answer...";
  return Promise.resolve(message);
}

function goodbye() {
  const message = "Bye for now, til next time";
  return Promise.resolve(message);
}

function tell(question) {
  if (!question) {
    const message = "You need to ask something before I can give you an answer you know that right?";
    return Promise.reject(message);
  }

  const fortune = selectRandomFortune();
  return Promise.resolve(fortune);
}

module.exports = { welcome, goodbye, tell };
