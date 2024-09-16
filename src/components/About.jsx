import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#042743",
  });

  const [btnText, setBtnTxt] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "#042743",
        backgroundColor: "white",
      });
      setBtnTxt("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#042743",
      });
      setBtnTxt("Enable Light Mode");
    }
  };

  let myStyleContainer = {
    border: "1px solid white",
    color: "grey",
    backgroundColor: "#042743",
  };

  return (
    <div className="container" style={myStyleContainer}>
      <h3>About Us</h3>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={myStyle}
            >
              <strong>Ananlyze to text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            TextUtils Web simplifies text analysis with features like word frequency counts, sentiment analysis, and readability scores. Its user-friendly interface lets you easily paste or upload text for instant results. Ideal for content creation, academic research, and customer feedback analysis, it ensures data privacy and is accessible from any device.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong> 
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
            TextUtils Web offers free, user-friendly tools for analyzing text, including word frequency, sentiment, and readability. No cost or subscription required—just paste or upload your text and get instant insights. Perfect for content creators, researchers, and anyone needing quick text analysis.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              <strong>Browser Compatiable</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
            TextUtils Web is fully compatible with any browser, allowing seamless text analysis from any device. No downloads needed—just open your browser, access the tool, and start analyzing text effortlessly. Ideal for quick and easy insights on the go.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
