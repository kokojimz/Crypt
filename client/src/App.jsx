import { Navbar, Welcome, Transaction } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transaction />
    </div>
  );
};

export default App;
