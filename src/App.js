import "./App.css";
import SideBar from "./components/SideBar/SideBar";
function App() {
  return (
    <div className="App">
      <div className="app-glass">
        <SideBar />
        <div>Content</div>
        <div>Right Side</div>
      </div>
    </div>
  );
}

export default App;
