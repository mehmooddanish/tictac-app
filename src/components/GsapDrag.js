import React, { useEffect } from "react";
import gsap from "gsap"; // Make sure GSAP is properly installed
import  { Draggable }  from "gsap"; // Check the import path
gsap.registerPlugin(Draggable);

const GsapDrag = () => {
  useEffect(() => {
    Draggable.create(".draggable-element", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: ".container",
    });
  }, []);

  return (
    <div className="container" style={{ height: "200px", position: "relative" }}>
      <div
        className="draggable-element"
        style={{ width: "50px", height: "50px", background: "blue", position: "absolute" }}
      >
        Drag Me
      </div>
    </div>
  );
};

export default GsapDrag;
