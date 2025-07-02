import { createContext, useContext, useState, useEffect } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export function AppContext({ children }) {
  const [searchInput, setSearchInput] = useState("")
  const [selectedStoreLocation, setSelectedStoreLocation] = useState(null)
  const [sortBy, setSortBy] = useState("StoreName")
  const [locations, setLocations] = useState([
    {
      id: 1,
      Latitude: 56.1721987,
      Longitude: 93.6466243,
      Phone: "+7 923 123-45-67",
      StoreName: "padbeeg, thiel and lubowitz",
      ZipCode: "12-3456",
    },
    {
      id: 2,
      Latitude: 53.1620102,
      Longitude: 16.6118082,
      Phone: "345-678-9012",
      StoreName: "feil and sons",
      ZipCode: "34-5678",
    },
    {
      id: 3,
      Latitude: 52.1620102,
      Longitude: 16.6118082,
      Phone: "+7 563 123-45-67",
      StoreName: "hoewer, feeney and moore",
      ZipCode: "66-7890",
    },
    {
      id: 4,
      Latitude: 24.7762658,
      Longitude: -107.4046797,
      Phone: "+52 123 456-7890",
      StoreName: "walter, moen and mohr",
      ZipCode: "33-4567",
    },
  ])
  const [filteredLocations, setFilteredLocations] = useState(locations)

  useEffect(() => {
    let filtered = locations.filter((loc) =>
      loc.StoreName.toLowerCase().includes(searchInput.toLowerCase())
    )
    if (sortBy === "asc") {
      filtered = filtered.sort((a, b) => a.StoreName.localeCompare(b.StoreName))
    } else if (sortBy === "desc") {
      filtered = filtered.sort((a, b) => b.StoreName.localeCompare(a.StoreName))
    }
    setFilteredLocations(filtered)
  }, [locations, searchInput, sortBy])

  function onSearchStore(input) {
    setSearchInput(input)
  }

  function onSetSort(sortBy) {
    setSortBy(sortBy)
  }

  function onSelectStoreLocation(location) {
    setSelectedStoreLocation(location)
  }

  return (
    <GlobalContext.Provider value={{ onSearchStore, searchInput, locations, filteredLocations, selectedStoreLocation, onSelectStoreLocation, onSetSort }}>
      {children}
    </GlobalContext.Provider>
  )
}
