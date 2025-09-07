import SortVisualizer from "../components/SortVisualizer";
import CornerLogo from "../components/CornerLogo";
import AlgoExplanation from "../components/AlgoExplanation";
import { selectionSort } from "../algorithms/selectionSort";

export default function SelectionPage() {
  return (
    <div style={{ padding: 30 }}>
      <CornerLogo size={80} />
      <h1 className="mx-auto w-fit text-5xl font-extrabold font-[system-ui] bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">
        Selection Sort
      </h1>

      <SortVisualizer
        algoName="Selection Sort"
        sortFunction={selectionSort}
        mode="selection"
      />

      <AlgoExplanation
        title="How Selection Sort Works"
        description="Selection Sort repeatedly finds the smallest element in the unsorted portion and swaps it with the first unsorted element."
        steps={`for i from 0 to n-1:
          minIndex = i
          for j from i+1 to n-1:
              if arr[j] < arr[minIndex]:
                  minIndex = j
          swap(arr[i], arr[minIndex])`}
        accent="pink-500"
      />

    </div>
  );
}
