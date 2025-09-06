export async function insertionSort(array, setArray, setActive, setSorted, setPivot, delay = 200) {
  let arr = [...array];
  const n = arr.length;
  let sortedIndices = [];

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // highlight key
    setActive([i]);
    await sleep(delay);

    while (j >= 0 && arr[j] > key) {
      setActive([j, j + 1]);
      arr[j + 1] = arr[j];
      setArray([...arr]);
      await sleep(delay);
      j--;
    }

    arr[j + 1] = key;
    setArray([...arr]);

    sortedIndices.push(i); // lock inserted index
    setSorted([...sortedIndices]);
    await sleep(delay);
  }

  setSorted([...Array(n).keys()]);
  setActive([]);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

