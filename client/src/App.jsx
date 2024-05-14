import { Navbar, Welcome } from "./components";
import { WavyBackground } from "./components/ui/wavy-background";

const App = () => {
  return (
    <WavyBackground className="min-h-screen bg-center bg-cover">
      <Navbar />
      <Welcome />
    </WavyBackground>
  );
};

export default App;
