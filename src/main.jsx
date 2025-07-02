import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AppContext } from "./AppContext";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppContext>
);
