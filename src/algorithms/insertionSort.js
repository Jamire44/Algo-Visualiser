export async function insertionSort(
  array,
  setArray,
  setActive,
  setSorted,
  setPivot,            // optional: use it, or remove from params
  delay = 200
) {
  const arr = [...array];
  const n = arr.length;

  // initially, nothing highlighted as sorted
  setSorted([]);

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    setPivot?.(i);                 // show the key (if you keep pivot)
    setActive([i]);
    await sleep(delay);

    while (j >= 0 && arr[j] > key) {
      setActive([j, j + 1]);
      arr[j + 1] = arr[j];         // shift right
      setArray([...arr]);
      await sleep(delay);
      j--;
    }

    arr[j + 1] = key;             
    setArray([...arr]);
    setPivot?.(j + 1);             

    setSorted([...Array(i + 1).keys()]);
    await sleep(delay);
  }

  setSorted([...Array(n).keys()]);
  setActive([]);
  setPivot?.(null);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
