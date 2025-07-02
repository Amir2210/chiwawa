import { useGlobalContext } from "../AppContext"
export function SearchForm() {
  const { onSearchStore } = useGlobalContext();

  function handleSubmit(ev) {
    ev.preventDefault()
    const searchValue = ev.target.elements.search.value
    onSearchStore(searchValue)
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search any store"
          name="search"
        />
        <button className="capitalize " type="submit">
          go
        </button>
      </form>
    </section>
  );
}
