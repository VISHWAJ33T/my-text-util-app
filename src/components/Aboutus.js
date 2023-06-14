import React, { useState } from "react";

export default function Aboutus(props) {
  return (
    <div className={`container py-3 bg-${props.mode} text-${props.mode==='dark'?'white':'dark'}`}>
      <h1 >About Us</h1>
      <div className={`accordion bg-${props.mode} text-${props.mode==='dark'?'white':'dark'}`}  id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='dark'?'white':'dark'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Analyze text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse bg-${props.mode} text-${props.mode==='dark'?'white':'dark'} showaccordion-collapse collapse`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='dark'?'white':'dark'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse bg-${props.mode} text-${props.mode==='dark'?'white':'dark'} showaccordion-collapse collapse`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            TextUtils is a Free character counter tool that provides instant character count & word count statistics for a given text. TextUtiIs reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='dark'?'white':'dark'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse bg-${props.mode} text-${props.mode==='dark'?'white':'dark'} showaccordion-collapse collapse`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleStyle} className="btn btn-primary my-3">{btntext}</button> */}
    </div>
  );
}
