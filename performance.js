const rana = ['Juyel', 'Rana', 'Mohammad'];

const ranas = new Array(10000).fill('Rana')

const findRana = (pArray) => {
  let t0 = performance.now();
  for (let i = 0; i < pArray.length; i++) {
    if (pArray[i] === 'Rana') {
      console.log("Found a Rana");
    }
  }
  let t1 = performance.now();
  console.log(`Call to findRana took ${t1 - t0} milliseconds`);
}

findRana(ranas);