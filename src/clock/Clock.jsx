import { useState } from 'react';
import '../clock/clock.css';

const App = () => {
let time = new Date().toLocaleTimeString();
const [ ctime, setCtime] = useState(time);
let updateTime = () =>{
 time = new Date().toLocaleTimeString();
 setCtime(time);
};
 setInterval(updateTime,1000);

  return(
    <div className="app"><h1>{ctime}</h1></div>
  )

}

export default App;