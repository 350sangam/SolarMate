/* globals dcp, progress */
import React from 'react'
import { useState, useEffect, useCallback} from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Home = () => {
    const [energyuse, setenergyuse] = useState('')
    const [Area, setArea] = useState('')
    const [a, seta] = useState('')
    const [per, setper] = useState('')
    const [Time, setTime] = useState('')
    const [jobHandle, setJobHandle] = useState(null);
    const [Pin, setPin] = useState('')

    
    //const onDeployJob = useCallback(function() {
    //    const compute = dcp.compute;
    //    let calcSaving = function (per) {
    //      n = progress()
    //      const usage = energyuse*1000
    //      const avlarea = Area
    //      const T = Time
    //      const a = 156.25*avlarea*T*30
    //      per = (a/usage)*100
    //      setper(per)
    //      return (per);
    //    };
    //
    //    setJobHandle(compute.do(calcSaving(per)));
    //  }, []);
    //  useEffect(function() {
    //    if (jobHandle !== null      /* not initial state */
    //        && !jobHandle.id) {     /* not yet deployed */ 
    //      jobHandle.exec();
    //    }
    //  }, [jobHandle]);
    //  
//    const progress = () => {};
//
//async function yourCode() {
//   const compute = dcp.compute;
//   function workFunction () {
//    const calcSaving = (per) =>{
//        
//        const usage = energyuse*1000
//        const avlarea = Area
//        const T = Time
//        const a = 156.25*avlarea*T*30
//        per = (a/usage)*100
//        setper(per)
//        return (per)
//    }
//    
//     progress();
//     const calcpct = (a) =>{
//        const avlarea = Area
//        const T = Time
//        a = (156.25*avlarea*T*30)/1000
//        seta(a)
//        return (a)
//    }
//   }
//   const data = [energyuse, Area, Time ];
//
//   const job = compute.for(workFunction, data);
//
//   const results = job.exec();
//   // do whatever you do with your results...
//}
    const calcSaving = (per) =>{
        
        const usage = energyuse*1000
        const avlarea = Area
        const T = Time
        const a = 156.25*avlarea*T*30
        per = (a/usage)*100
        setper(per)
        return (per)
    }
    const calcpct = (a) =>{
        const avlarea = Area
        const T = Time
        a = (156.25*avlarea*T*30)/1000
        seta(a)
        return (a)
    }
    return (
        <div>
            <h1>Want to now how much u can save?</h1>
            <div>
            <label>How much energy u consume Monthly?</label>
            <input placeholder="eg.100 kwh" className="input" type="text" onChange= {(event) =>setenergyuse(event.target.value)} />
            <label>How much surface area you have?(in cubic meters)</label>
            <input placeholder="eg.20 m^3" className="input" type="text" onChange={(event) => setArea(event.target.value)} />
            <label>How long does sun stays in your location?</label>
            <input placeholder="eg.10 hrs" className="input" type="text" onChange={(event) => setTime(event.target.value)} />
            <button className = "button-lnd"  onClick = {(event) =>{calcpct();calcSaving();} }>Calculate</button>
            <label>you can save in {per} % </label>
            <label>that is around {a} KWh</label>
            </div>
            <label>Enter pincode to get nearest place to buy solar panel</label>
            <input type = 'text' className="input" placeholder="eg. 110034" ></input>
            <a href ="http://localhost:5000/sellers"><button className='button-lnd' href ="http://localhost:5000/sellers" >See sellers</button></a>
            
        </div>
    )
}

export default Home
