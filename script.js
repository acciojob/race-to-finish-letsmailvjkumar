window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
for (let i = 0; i < 5; i++) {
  const delay = Math.floor(Math.random() * 5) + 1; // Generate random delay between 1 and 5 seconds

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${delay} seconds`);
    }, delay * 1000);
  });

  promises.push(promise);
}
Promise.any(promises)
  .then((result) => {
    const outputElement = document.getElementById("output");
    outputElement.innerText = result;
  })
  .catch((error) => {
    console.error(error);
  });