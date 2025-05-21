import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
