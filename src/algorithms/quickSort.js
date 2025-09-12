export async function quickSort(array, setArray, setActive, setSorted, setPivot, delay = 200) {
    let arr = [...array];
    let sortedIndices = [];
  
    async function partition(low, high) {
      let pivot = arr[high];
      setPivot(high);
      let i = low - 1;
  
      for (let j = low; j < high; j++) {
        setActive([j]);
        await sleep(delay);
  
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await sleep(delay);
        }
      }
  
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      await sleep(delay);
  
      return i + 1;
    }
  
    async function quick(low, high) {
      if (low < high) {
        let pi = await partition(low, high);
  
        sortedIndices.push(pi);
        setSorted([...sortedIndices]);
  
        await quick(low, pi - 1);
        await quick(pi + 1, high);
      } else if (low === high) {
        sortedIndices.push(low);
        setSorted([...sortedIndices]);
      }
    }
  
    await quick(0, arr.length - 1);
  
    setSorted([...Array(arr.length).keys()]);
    setActive([]);
    setPivot(null);
  }
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  