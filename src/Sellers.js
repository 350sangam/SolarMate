/* globals dcp, progress */
import { useState, useCallback, useEffect } from 'react';

function App({energyuse , Area , Time}) {
  const [inputValue, updateInputValueFn] = useState('');
  const [jobHandle, setJobHandle] = useState(null);
  const [leftTAContent, setLeftTAContent] = useState('');
  const [rightTAContent, setRightTAContent] = useState('');
  const [per, setper]=useState
        const usage = energyuse*1000
        const avlarea = Area
        const T = Time
  const onDeployJob = useCallback(function({usage,avlarea,T}) {
    const compute = dcp.compute;
    let inputSet = Array.from(inputValue);
    let workFn = function (usage,avlarea,T) {
        progress();
        const a = 156.25*avlarea*T*30
        const per = (a/usage)*100
        updateInputValueFn(per)
        return (per);
    };

    setJobHandle(compute.for(inputSet, workFn));
  }, [inputValue]);

  useEffect(function() {
    if (jobHandle !== null) {
      jobHandle.on('readystatechange', (ev) => setLeftTAContent((currentValue) => currentValue + '\nReady State:' + ev));
      jobHandle.on('status', (ev) => setLeftTAContent((currentValue) => currentValue + '\nStatus: ' + Object.entries(ev).join(' ').replace(/,/g,': ')));
      jobHandle.on('result', (ev) => setRightTAContent((currentValue) => currentValue + '\n' + Object.entries(ev).join(' ').replace(/,/g,': ')));
      jobHandle.on('complete', (ev) => alert(inputValue));
    }
  }, [jobHandle]);
            
  useEffect(function() {
    if (jobHandle !== null      /* not initial state */
        && !jobHandle.id) {     /* not yet deployed */ 
      jobHandle.exec();
    }
  }, [jobHandle]);
  
  return (
    <div className="App">
      <header className="App-header">
      Enter a string to change to uppercase via the Distributed Computer:
      <input type="text" value={inputValue} onChange={(ev)=>{console.log(ev.target.value); updateInputValueFn(ev.target.value)}}/>
      <input type="submit" onClick={onDeployJob} value='Distribute'/>
      <div style={{display: 'flex', width: '1000px', marginTop: 15 }}>
        <div style={{flexGrow: 1, marginRight: 15}}><div>Status Events</div>
          <textarea rows={20} style={{width: '100%', marginRight: 5}} value={leftTAContent} readOnly/>
        </div>
         <div style={{flexGrow: 1 }}><div>Individual Results</div>
          <textarea rows={20} style={{width: '100%'}} value={rightTAContent} readOnly/>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;