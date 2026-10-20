
import './App.css';
import { Header, Footer, ProductCard } from './components';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
