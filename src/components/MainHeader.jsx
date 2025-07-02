import { SearchForm } from "./SearchForm";
import { SortButtons } from "./SortButtons";

export function MainHeader() {
  return (
    <header className="flex gap-4  p-5 bg-gray-200 shadow-md">
      <SearchForm />
      <SortButtons />
    </header>
  );
}
