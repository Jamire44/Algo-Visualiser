// bubbleSort.js
export async function bubbleSort(array, setArray, setActive, setSorted, delay = 200) {
    let arr = [...array];
    const n = arr.length;
    let sortedIndices = [];
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // highlight two being compared
        setActive([j, j + 1]);
  
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
  
        await sleep(delay);
      }
      // lock the last element in this pass
      sortedIndices.unshift(n - 1 - i);
      setSorted([...sortedIndices]);
    }
  
    // finally, lock the first element too
    setSorted([...Array(n).keys()]);
    setActive([]);
  }
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  