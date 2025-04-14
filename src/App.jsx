import "./translation/i18n";
import { Router } from "./Routes/Router";
import { ScrollToHash } from "./utils/Scroll";

function App() {
  return (
    <div className="App">
      <ScrollToHash/>
      <Router />
    </div>
  );
}

export default App;
