import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  useRef,
  type ButtonHTMLAttributes,
  type HtmlHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  const btnRef = useRef(null);
  const textRef = useRef(null)
  const onHover = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        y: "0%",
        duration: 0.5,
        ease: "power4.inOut",
        width: "100px",
        top: 0,
      });
    }
  };
  const onHoverText = ()=>{
    
    if(textRef.current){
      gsap.to(textRef.current, {
        color: "#fffffff",
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }
  const onLeaveText = ()=>{
    if(textRef.current){
      gsap.to(textRef.current, {
        color: "#000000",
        duration: 0.3,
      });
    }
  }
  const leaveHover = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        y: "100%",
        duration: 0.3,
        ease: "back.inOut",
        width: "1px",
      });
    }
  };
  return (
    <button
      onMouseEnter={()=>{onHover(), onHoverText()}}
      onMouseLeave={()=>{leaveHover(), onLeaveText()}}
      className="bg-blue-500  px-5 py-1 cursor-pointer rounded-full flex tracking-wide font-medium w-fit h-fit relative overflow-hidden"
    >
      <div
        ref={btnRef}
        className="w-1 h-full absolute bg-black text-white right-0 flex justify-center items-center rounded-full translate-y-full"
      ></div>
      <span ref={textRef} className=" w-full h-full z-10 text-black">
        {children}
      </span>
    </button>
  );
}

export default Button;
