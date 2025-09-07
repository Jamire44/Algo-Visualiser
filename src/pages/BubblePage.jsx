import SortVisualizer from "../components/SortVisualizer";
import CornerLogo from "../components/CornerLogo";
import AlgoExplanation from "../components/AlgoExplanation";
import { bubbleSort } from "../algorithms/bubbleSort";

export default function BubblePage() {
  return (
    <div style={{ padding: 30, backgroundColor: "white", minHeight: "100vh"}}>
      <CornerLogo size={80} />
      <h1 className="mx-auto w-fit text-5xl font-extrabold font-[system-ui] bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">
          Bubble Sort
        </h1>

      <SortVisualizer
        algoName="Bubble Sort"
        sortFunction={bubbleSort}
        mode="bubble"
      />
      
      <AlgoExplanation
        title="How Bubble Sort Works"
        description="Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Each pass 'bubbles' the largest element to the end. After n passes, the list is sorted."
        steps={`for i from 0 to n-1:
                for j from 0 to n-i-1:
                  if arr[j] > arr[j+1]:
                  swap(arr[j], arr[j+1])`}
        accent="sky-400"
      />
      
    </div>
  );
}
