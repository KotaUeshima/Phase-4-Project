import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import BlogFeed from "./pages/BlogFeed";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/feed" element={<BlogFeed/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/create_account" element={<CreateAccount/>} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;