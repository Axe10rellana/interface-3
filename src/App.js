import Header from "./components/Header";
import Classics from "./components/Classics";
import Curious from "./components/Curious";

const App = () => {
  return (
    <div className="app">
      <Header />
      <h2 className="text-center text-secondary lighter margin-bottom">
        classic
      </h2>
      <div className="cards">
        <Classics />
      </div>
      <h2 className="text-center text-secondary lighter margin-bottom">
        curious
      </h2>
      <div className="cards">
        <Curious />
      </div>
    </div>
  );
};

export default App;
