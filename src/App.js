import data from './data.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import NavBar from './components/Nav';
import SlidingWindow from "./components/Carosul"
import FilterBox from './components/FilterBox';
import Footer from './components/Footer';
 function App() {

  const [make, setmake] = useState("");
  const [model, setmodel] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  return (
    <>
    <div style={{backgroundColor:'#cddbe291',fontStyle:'Arial'}}>
    <NavBar/>
     <SlidingWindow/>
     <FilterBox/>
    <Footer/>
    </div>
    </>
  );
}
export default App;


{/* <input type="text" name="searchBar" placeholder="Make ..." id="searchBar"
onKeyUp={handleChange}
/>
<input type="text" name="searchBar" placeholder="Model ..." id="searchBar"
onKeyUp={handleChangeModel}
/>
<input type="text" name="searchBar" placeholder="Price ..." id="searchBar"
onKeyUp={handleChangePrice}
/>

<input type="text" name="searchBar" placeholder="Type ..." id="searchBar"
onKeyUp={handleChangeType}
/>
<div>
{data.filter(
  (val) => {
    const makeGuitar = val.make.toLowerCase();
    if (make == "")
      return val;
    else if (makeGuitar.includes(make.toLowerCase())) {
      return val;
    }
  }
).filter((val) => {
  const modelGuitar = val.model.toLowerCase();
  if (model == "")
    return val;
  else if (modelGuitar.includes(model.toLowerCase())) {
    return val;
  }
})
  .filter((val) => {
    const priceGuitar = val.price.toLowerCase();
    if (price == "")
      return val;
    else if (priceGuitar.includes(price.toLowerCase())) {
      return val;
    }
  })
  .filter((val) => {
    const typeGuitar = val.type.toLowerCase();
    if (type == "")
      return val;
    else if (typeGuitar.includes(type.toLowerCase())) {
      return val;
    }
  })
  .map(((item) => {
    return (
      <div>
        <img src={item.image} alt="" srcset="" />
        <h3>{item.make}</h3>
        <h3>{item.model}</h3>
        <h3>{item.price}</h3>
        <h3>{item.type}</h3>
      </div>
    )
  }))}
</div> */}


