import React from 'react'
import { useState } from 'react'; //here use state is a hook, hooks are like functions, here useState helps us in making state variables 
//In React, the useState hook is a built-in hook that allows functional components to manage state. It is imported from the 'react' library.

export default function TextForm(props) {
    const handelUpClick = () => {
        //console.log("Uppercase was clicked -->" + text);
        setDisplayTextarea(false);
        let newText = text.toUpperCase();

        setText(newText);
        // props.alert && props.showAlert("Converted to uppercase","success");
        props.showAlert(" Converted to uppercase","secondary");
    }
    const handelLoClick = () => {
        //console.log("Uppercase was clicked -->" + text);
        setDisplayTextarea(false);
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert(" Converted to Lowercase","secondary");
    }
    const handelClearClick = () => {
        //console.log("Uppercase was clicked -->" + text);
        setDisplayTextarea(false);

        setText('');
        props.showAlert(" All Text Cleared","success");

    }
    const handelCamelClick = () => {
        //console.log("Uppercase was clicked -->" + text);
        setDisplayTextarea(false);

        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword);
        props.showAlert(" Converted to Camelcase", "secondary");

    }
    const [displayTextarea, setDisplayTextarea] = useState(false);
    const [displayButton, setDisplayButton] = useState(false);
    const [placeholder1, setPlaceholder1] = useState('Enter word to be replaced');
    const [placeholder2, setPlaceholder2] = useState('Enter new word here');
    const [enter, setEnter] = useState(false);

    const handelReplaceText = () => {
        props.showAlert(" YAY Replaced Text","secondary");
        let existing_text = text1;
        let replaced_text = text2;
        setText(text.replaceAll(existing_text, replaced_text))
        const enterToggle = document.getElementById('enterT');
        if (enterToggle.textContent === "Enter") {
            enterToggle.innerHTML = "Clear";
        } else {
            enterToggle.innerHTML = "Enter";
            setText1('');
            setText2('');
        }

    }

    const showC = () => {
        const enterToggle = document.getElementById('enterT');
        enterToggle.innerHTML = "Enter";
        setDisplayTextarea(true);
        setDisplayButton(true);
        setPlaceholder1('Enter Sentence 1');
        setPlaceholder2('Enter Sentence 2');
        setText1('');
        setText2('');
        setEnter(true);
    }
    const showR = () => {
        const enterToggle = document.getElementById('enterT');
        enterToggle.innerHTML = "Enter";
        setEnter(false);
        setDisplayTextarea(true);
        setDisplayButton(true);
        setText1('');
        setText2('');
        setPlaceholder1('Enter word to replaced');
        setPlaceholder2('Enter new word');
    }

    const handleCompareClick = () => {
        props.showAlert(" Compared the sentences","secondary");
        let existing_text = text1;
        let replaced_text = text2;
        const enterT = document.getElementById('enterT');

        if (existing_text === replaced_text) {
            if (enterT.textContent === "Enter") {
                enterT.innerHTML = "Clear";
                setText1(text1 + "->Matching texts");
                setText2(text2 + "->Matching texts");
            } else {
                enterT.innerHTML = "Enter";
                setText1('');
                setText2('');
            }
        } else {
            if (enterT.textContent === "Enter") {
                enterT.innerHTML = "Clear";
                setText1(text1 + "->Not Matching");
                setText2(text2 + "->Not Matching");
            } else {
                enterT.innerHTML = "Enter";
                setText1('');
                setText2('');
            }
        }
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra spaces are gone!", "secondary");
    }




    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);

        const toggle = document.getElementById('toggles');
        if (toggle.textContent === "Speak") {
            toggle.innerHTML = "Stop";
        } else {
            toggle.innerHTML = "Speak";
            window.speechSynthesis.cancel();
        }
        props.showAlert(" Yes you can hear me!","secondary");
    }

    const CopyToClipboard = () => {
        setDisplayTextarea(false);
        setDisplayButton(false);
        navigator.clipboard.writeText(text)
            .then(() => {
                // console.log(text + " copied ");
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
            props.showAlert(" Aye Aye Captain Copied It All ", "secondary");
    }



    const handleOnChange = (event) => {
        // console.log("Uppercase was changed");
        setText(event.target.value); //continuously updates the text sate variable wrt to the event value given
        //The event parameter is an object that represents the event that occurred. It contains information about the event, such as the target element and the value of the input field that triggered the event
        //event.target refers to the element that triggered the event, which is the input field in this case.
        //By accessing event.target.value, you can retrieve the current value of the input field
        //setText(event.target.value) is used to update the state variable text with the value entered in the input field.
    }

    const handleOnChange1 = (event) => {
        setText1(event.target.value);

    }
    const handleOnChange2 = (event) => {
        setText2(event.target.value);

    }

    const [text, setText] = useState(''); // here we have set a state variable 'text' and its default value is "Enter text here"
    //To change the default value we use the function 'setText'
    //text="new text"; --> wrong way to change the state
    // setText("new text"); //--> correct way to change the state
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');



    return (
        <>
            <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'darkgreen'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here' style={{backgroundColor: props.mode==='dark'? '#4f506d':'white', color: props.mode === 'dark' ? 'white' : 'black',}}></textarea>
                    <div className="container">
                        <textarea
                            className="form-control my-2"
                            value={text1}
                            onChange={handleOnChange1}
                            id="myBox"
                            rows="1"
                            placeholder={placeholder1}
                            style={{ display: displayTextarea ? 'block' : 'none', width: '300px', backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black',}}
                        ></textarea>

                        <textarea className="form-control" value={text2} onChange={handleOnChange2} id="myBox" rows="1" placeholder={placeholder2} style={{ display: displayTextarea ? 'block' : 'none', width: '300px', backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black',}}></textarea>
                        <button type="button" className="btn btn-warning my-2 mx-0" id="enterT" onClick={enter ? handleCompareClick : handelReplaceText} style={{ display: displayButton ? 'block' : 'none' }} >Enter</button>
                    </div>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handelUpClick} >Convert To UpperCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handelLoClick} >Convert To LowerCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={showR} >Replace Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handelCamelClick} > Convert To Camelcase </button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={showC} >Compare</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces} >Remove Extra Whites</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-2" onClick={speak} id="toggles">Speak</button>
                <button disabled={text.length===0} type="button" className="btn btn-secondary mx-1 my-2" onClick={CopyToClipboard} >Copy Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-success mx-1 my-2 " onClick={handelClearClick} >Clear Text</button>

            </div>

            <div className="container my-5" style={{color: props.mode === 'dark' ? 'white' : 'darkgreen'}}>

                <h2>Your Text Summary</h2>

                <p>{text ? text.trim().split(/\s+/).length : 0} and {text.length} characters</p>

                <p>{text ? 0.008 * text.split(" ").length : 0} Minutes to read </p>
                <h3>preview</h3>
                <p>{text.length>0?text:"Nothing To Preview"}</p>

            </div>
        </>

    )
}
