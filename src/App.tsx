import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="legal" element={<Legal />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
