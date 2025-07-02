import { useGlobalContext } from "../AppContext"
export function SearchForm() {
  const { onSearchStore } = useGlobalContext()

  function handleSubmit(ev) {
    ev.preventDefault()
    const searchValue = ev.target.elements.search.value
    onSearchStore(searchValue)

    
  }
  return (
    <section>
      <form className="container mx-auto gap-4 p-4" onSubmit={handleSubmit}>
        <input
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search any store"
          name="search"
        />
        <button
          className="capitalize px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="submit"
        >
          go
        </button>
      </form>
    </section>
  )
}
