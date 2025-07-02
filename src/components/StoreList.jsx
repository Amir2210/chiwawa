import { useGlobalContext } from "../AppContext";

export function StoreLists() {
  const { filteredLocations, onSelectStoreLocation, selectedStoreLocation } =
    useGlobalContext();
  return (
    <ul className="overflow-y-auto flex-1">
      {filteredLocations.length === 0 && (
        <li className="text-gray-400 text-center mt-8">לא נמצאו תוצאות</li>
      )}
      {filteredLocations.map((loc) => (
        <li
          key={loc.id}
          onClick={() => onSelectStoreLocation(loc)}
          className={`cursor-pointer capitalize p-2 rounded mb-2 transition-colors ${
            selectedStoreLocation && selectedStoreLocation.id === loc.id
              ? "bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          {loc.StoreName}
        </li>
      ))}
    </ul>
  );
}
