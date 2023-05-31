const putul = ['Putul', 'Nurun', 'Nahar'];

const findPutul = (pArray) => {
  let t0 = performance.now();
  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] === 'Putul') {
      console.log("Found a Putul");
    }
  }
  let t1 = performance.now();
  console.log(`Call to findPutul took ${t1 - t0} milliseconds`);
}

findPutul(putul);