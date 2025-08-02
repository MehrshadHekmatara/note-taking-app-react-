"use client";

import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

const container = {
  width: 60,
  height: 25,
  backgroundColor: "var(--toggle-bg)",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "5px",
  left: "5px",
};

const handle = {
  width: 20,
  height: 20,
  backgroundColor: "var(--toggle-handle)",
  borderRadius: "50%",
};

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    if (isOn) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isOn]);

  return (
    <button
      className="toggle-container"
      style={{
        ...container,
        justifyContent: "flex-" + (isOn ? "start" : "end"),
      }}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle"
        style={handle}
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}
