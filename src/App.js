import WorldData from "./components/world-data/WorldData"
import CountryData from "./components/country-data/CountryData";

function App() {
  return (
    <>
      <div className='world-container'>
        <WorldData />
      </div>

      <div className='country-container'>
        <CountryData />
      </div>
    </>
  );
}

export default App;
