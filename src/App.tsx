import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import imagePath from "./assets/logo.jpg";

function App() {
  return (
    <div>
      <Nav brandName="Seena Mohajeran" imageSrcPath={imagePath} />
    </div>
  );
}

export default App;
