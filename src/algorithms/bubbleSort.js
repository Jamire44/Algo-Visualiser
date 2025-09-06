export async function bubbleSort(array, setArray, setActive, delay = 200) {

    // Copy of an array
    let arr = [...array];

    // Starts at 0, ends at the end
    for (let i = 0; i < arr.length - 1; i++) {

        // Starts at 0
      for (let j = 0; j < arr.length - i - 1; j++) {
        setActive([j, j + 1]);

        if (arr[j] > arr[j + 1]) {

          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          setArray([...arr]);  // re-renders the array

          await sleep(delay);  // pause so we can see swap
        }
      }
    }
    setActive([]);
  }
  
  // Small helper
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  