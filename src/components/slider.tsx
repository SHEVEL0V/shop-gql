/** @format */

import React, { useRef, useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  children: JSX.Element[];
};

export default function Slider({ children }: Props) {
  const slider = useRef<HTMLHeadingElement>(null!);
  const [activeId, setActiveId] = useState<number>(0);
  const [startX, setStartX] = useState<Number>(0);
  const [moveX, setMoveX] = useState<Number>(0);

  const translate = slider.current?.offsetWidth * activeId;

  const prevHandler = () => 0 < activeId && setActiveId(activeId - 1);

  const nextHandler = () =>
    children.length - 1 > activeId && setActiveId(activeId + 1);

  const isActive = (value: number) =>
    activeId === value ? "border-green-400" : "border";

  return (
    <div className="max-w-[500px]">
      <div className="relative  px-12 ">
        <div className=" overflow-hidden  rounded ">
          <div
            className={`flex  transition-all  ease-out  duration-500 `}
            style={{ transform: `translateX(-${translate}px)` }}
            ref={slider}
            onTouchStart={(e) => setStartX(e.touches[0].clientX)}
            onTouchMove={(e) => setMoveX(e.touches[0].clientX)}
            onTouchEnd={() => (startX > moveX ? nextHandler() : prevHandler())}
          >
            {children.map((item, i) => (
              <div key={i} className={"p-1 min-w-full "}>
                {item}
              </div>
            ))}
          </div>
          <IconButton
            sx={{
              position: "absolute",
              transform: "translateY(-50%)",
              left: 0,
              top: "50%",
            }}
            onClick={prevHandler}
            disabled={0 === activeId}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              transform: "translateY(-50%)",
              right: 0,
              top: "50%",
            }}
            onClick={nextHandler}
            disabled={children.length - 1 === activeId}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className="flex justify-center  ">
        {children.map((child, i) => (
          <div
            key={i}
            onClick={() => setActiveId(i)}
            className={`${isActive(i)}
            w-16 m-2 overflow-hidden border-2  shadow-md rounded 
            hover:opacity-80 cursor-pointer`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
