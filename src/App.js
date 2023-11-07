import Search_bar from "./components/Search_bar";
import Top_bar from "./components/Top_bar";
import User_info from "./components/User_info";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <Top_bar />
      <Search_bar />
      <User_info />
    </div>
  );
}

export default App;
