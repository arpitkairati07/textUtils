import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    //console.log("UpperCse button was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const noOfVowels = () => {
    let Vowels = "aAeEiIoOuU";
    let c = 0;
    for (let i = 0; i < text.length; i++) {
      if (Vowels.indexOf(text[i]) !== -1) {
        c += 1;
      }
    }
    //console.log("No.of vowels is present in given string")
    setText(c);
  };
// This function is used to copy all the elements from the box and to copy to the clipboard.
  const copyToClipboard = () =>{
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

// Remove an extra space from the box
const removeSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}
  const handleOnChange = (event) => {
    //console.log("Onchange")
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{
             color:props.mode==='dark'?'white':'black'
            }
            }>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:props.mode==='dark'?'grey':'white',
              color:props.mode==='dark'?'white':'black'
            }
            }
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={noOfVowels}>
          Count number of Vowels
        </button>
        <button className="btn btn-primary mx-3" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-3" onClick={removeSpace}>
          Remove Extra space
        </button>

      </div>
      <div className="container my-5" style={{
             color:props.mode==='dark'?'white':'black'
            }
            }>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length} words and  {text.length} characters </p>
        <p>Expected time to read the textarea content {0.008*text.split(" ").length}</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the textbox to preview here'}</p>
      </div>
    </>
  );
}
