import { StoreLists } from "./StoreList";

export function MainContent() {
  return (
    <main className="grid grid-cols-3 h-screen bg-gray-100 container mx-auto gap-4 p-4">
        <StoreLists />
    </main>
  );
}
