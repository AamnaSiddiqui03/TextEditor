import React from "react";




export default function About(props) {


    // const[myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border:'1px solid white'
    // });


   let myStyle = {
    color:props.mode==="dark"? "white":"black",
    backgroundColor: props.mode==="dark"? "black":"white"
    
   }


  return (
    <div className="container mx-3" style={ myStyle }>
        <h1>About Us</h1>
      <div className="accordion my-3 "  id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
            <strong>Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              
            TextUtils gives you a way to analyse your text quickly and efficiently, may it be count, character or preview
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
                
            >
              <strong>Feel Free To Use</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              
            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUltils report the number of words and characters. Thus it is suitablefor writing text with word/character limit

            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
            <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             This word counter software works in any web browser such as chrome, firefox, internet explorer, safari etc. It suits to count characters in facebook, blog, book, excel, document, pdf document , essays etc.
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
