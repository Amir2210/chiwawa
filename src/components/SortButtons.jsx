import { useGlobalContext } from "../AppContext";

export function SortButtons() {
    const {onSetSort} = useGlobalContext()
  return (
    <div className="gap-2 flex">
      <button
        className="capitalize px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        type="submit"
        onClick={() => onSetSort("asc")}
      >
        Sort ASC
      </button>
      <button
        className="capitalize px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        type="submit"
        onClick={() => onSetSort("desc")}
      >
        Sort DESC
      </button>
    </div>
  );
}
