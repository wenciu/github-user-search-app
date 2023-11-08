import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";
import User from "./components/User";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <User />
    </div>
  );
}

export default App;
