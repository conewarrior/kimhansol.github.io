import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Header from "./templates/Header";
import Design from './templates/Design';
import Column from "./templates/Column";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Portfolio>
        <Design/>
        <Column/>
      </Portfolio>

      <Profile/>
    </div>
  );
}

export default App;
