import Home from "./components/Home";
import About from "./components/About";
import HomeClass from "./components/HomeClass";
// import StateMain from "./setState/StateMain";
function App() {
  return (
    <div className="App">
      <Home />
      <br />
      <HomeClass></HomeClass>
      <br />
      <About />
      {/* <StateMain></StateMain> */}
    </div>
  );
}

export default App;
