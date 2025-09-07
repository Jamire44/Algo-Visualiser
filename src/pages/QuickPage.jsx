import SortVisualizer from "../components/SortVisualizer";
import CornerLogo from "../components/CornerLogo";
import AlgoExplanation from "../components/AlgoExplanation";
import { quickSort } from "../algorithms/quickSort";

export default function QuickPage() {
  return (
    <div style={{ padding: 30 }}>
      <CornerLogo size={80} />
      <h1 className="mx-auto w-fit text-5xl font-extrabold font-[system-ui] bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">
        Quick Sort
      </h1>

      <SortVisualizer
        algoName="Quick Sort"
        sortFunction={quickSort}
        mode="quick"
      />

      <AlgoExplanation
        title="How Quick Sort Works"
        description="Quick Sort is a divide-and-conquer algorithm. It picks a pivot, partitions the array into two halves, and recursively sorts each half."
        steps={`function quicksort(arr, low, high):
          if low < high:
              pivot = partition(arr, low, high)
              quicksort(arr, low, pivot-1)
              quicksort(arr, pivot+1, high)`}
        accent="red-500"
      />


    </div>
  );
}
