import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked and the text was changed to " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text converted to uppercase","success")
  };
  const handleLowClick = () => {
    // console.log("Lowercase was Clicked and the text was changed to " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text converted to lowercase","success")
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to speach out Activated","success")

  };
  const handleReplaceClick = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text));
    props.showAlert("Text Replaced","success")
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text here" //Wrong way to change this
  //   setText("new text here"); //Correct way to change this
  return (
    <>
      <div className="container">
        <h3 className={`text-${props.mode==='dark'?'white':'dark'}`}>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className={`form-control my-2 text-${props.text} bg-${props.text==='white'?'black':'white'}`}
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button
            type="submit"
            onClick={handleReplaceClick}
            className="btn btn-primary mx-1 my-1"
          >
            Find and Replace
          </button>
          <button type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">
            Speak
          </button>
      </div>
      <div className="container my-3">
        <h3  className={`text-${props.mode==='dark'?'white':'dark'}`}>Your text Summary</h3>
        <p className={`text-${props.mode==='dark'?'white':'dark'}`}>
          <b>{text.split(" ").length} words</b> and <b>{text.length} characters</b>
        </p>
        <p className={`text-${props.mode==='dark'?'white':'dark'}`}><b>{0.008 * text.split(" ").length} minutes</b> to read</p>
        <h4 className={`text-${props.mode==='dark'?'white':'dark'}`}>Preview</h4>
        <p className={`text-${props.mode==='dark'?'white':'dark'}`}>{text}</p>
      </div>
    </>
  );
}
