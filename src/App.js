import { useState, useEffect } from 'react';
import Patternmob from "./images/pattern-divider-desktop.svg"
import Dice from "./images/icon-dice.svg"
function App() {
  
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setAdvice(data.slip)
  }

  useEffect(() =>{
    getAdvice()
  },[])

  return (
        <section className="min-h-screen w-screen mx-auto bg-slate-900 flex items-center justify-center md:px-0 px-10">
            <article className='relative w-full max-w-[30rem] bg-slate-700 shadow-lg rounded-lg p-5 text-center'>
            <div className='font-bold text-sm text-emerald-400 tracking-widest mb-7'>ADVICE #{advice.id}</div>
            <p className=' text-zinc-300 text-3xl mb-7'>"{advice.advice}"</p>
            {/* wrapper line */}
            <div className="flex items-center justify-center mb-10">
              <img src={Patternmob} alt="" />
            </div>
            <button onClick={() => {
              getAdvice()
            }} className=' bg-emerald-400 w-14 h-14 rounded-full shadow absolute left-1/2 right-1/2 -translate-x-1/2 -bottom-7
            hover:shadow-emerald-200 transition-all ease-in'>
              <span className='flex items-center justify-center'>
                <img src={Dice} alt="" />
              </span>
            </button>
          </article>
    </section>
  );
}

export default App;