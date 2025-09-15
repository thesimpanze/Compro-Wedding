import { useEffect, useState } from 'react'
import './App.css'
import Lenis from 'lenis'
import Button from './components/button';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
     <div className="m-auto font-grotesk w-full flex justify-center h-screen items-center">
      <Button>Testing</Button>
      <Button>Hello</Button>
      <Button>World</Button>
     </div>
    </>
  )
}

export default App
