import './App.css';

import { LeftSide } from './containers/LeftSide';
function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
         <div className="col-2">
         <LeftSide/>
         </div>
         <div className="col-10">
            <div className="right-side"></div>
          </div> 
        </div>
        
       
      </div>
    </div>
  );
}

export default App;
