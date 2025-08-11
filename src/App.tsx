import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import WorkspaceScreen from "./screens/workspace/WorkspaceScreen";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isDev = process.env.NODE_ENV !== "production";
const Router = isDev ? BrowserRouter : HashRouter;

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WorkspaceScreen />} />
          <Route path="/settings" element={null} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default App;
