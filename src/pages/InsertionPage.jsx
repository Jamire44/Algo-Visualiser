import SortVisualizer from "../components/SortVisualizer";
import { insertionSort } from "../algorithms/insertionSort";
import AlgoExplanation from "../components/AlgoExplanation";
import CornerLogo from "../components/CornerLogo";


export default function InsertionPage() {
  return (
    <div style={{ padding: 30 }}>
      <CornerLogo size={80} />
      <h1 className="mx-auto w-fit text-5xl font-extrabold font-[system-ui] bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">
        Insertion Sort
      </h1>


      <SortVisualizer
        algoName="Insertion Sort"
        sortFunction={insertionSort}
        mode="insertion"
        className="mt-8"
      />

      <AlgoExplanation
        title="How Insertion Sort Works"
        description="Insertion Sort builds the sorted array one element at a time by inserting each element into its correct position."
        steps={`for i from 1 to n-1:
          key = arr[i]
          j = i - 1
          while j >= 0 and arr[j] > key:
              arr[j+1] = arr[j]
              j = j - 1
          arr[j+1] = key`}
        accent="orange-400"
      />


    </div>
  );
}
