export async function bubbleSort(array, setArray, setActive, setSorted, setPivot, delay = 200) {
  let arr = [...array];
  const n = arr.length;
  let sortedIndices = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setActive([j, j + 1]); // highlight
      await sleep(delay);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await sleep(delay);
      }
    }
    sortedIndices.unshift(n - 1 - i);
    setSorted([...sortedIndices]);
  }

  setSorted([...Array(n).keys()]);
  setActive([]);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
