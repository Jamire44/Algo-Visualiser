export async function selectionSort(array, setArray, setActive, setSorted, setPivot, delay = 200) {
  let arr = [...array];
  const n = arr.length;
  let sortedIndices = [];

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      setActive([minIndex, j]); // min vs candidate
      await sleep(delay);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray([...arr]);
      await sleep(delay);
    }

    sortedIndices.push(i); // lock
    setSorted([...sortedIndices]);
  }

  setSorted([...Array(n).keys()]);
  setActive([]);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

