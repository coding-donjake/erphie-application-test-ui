import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import WorkspaceScreen from "./screens/workspace/WorkspaceScreen";

const isDev = process.env.NODE_ENV !== "production";
const Router = isDev ? BrowserRouter : HashRouter;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkspaceScreen />} />
        <Route path="/settings" element={null} />
      </Routes>
    </Router>
  );
};

export default App;
