import React,{useState} from 'react';


export default function TextForm(props){
    const [text,setText]= useState("Enter text here");
    // console.log(text);
    // text="this is updated new text"; //this is wrong way
    // setText("this is new updated text"); //this is correct way

    const handleUpClick= ()=>{
        console.log("Uppercase was clicked");
        // setText("You have clicked on handleUpClick");
        let targetText=text.toUpperCase();
        setText(targetText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleDownClick= ()=>{
        console.log("Lowercase button was clicked");
        let targetText=text.toLowerCase();
        setText(targetText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleOnChange=(event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }

    const handleClearClick=()=>{
        setText("");
        props.showAlert("Cleared the text","success");
    }

    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        console.log("copied to clipboard");
        props.showAlert("copied to clipboard","success");
    }

    const removeExtraspaces= () =>{
        let targettext=text.split(/[ ]+/);
        setText(targettext.join(" "));
        props.showAlert("white spaces has been removed","success");
    }

    function findWords(str){
        let res=0;
        let arr=str.split(" ");
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if(element){res++;}
        }
        return res;
    }

    return (
        <>
        <div className="mb-3 container">
        <h1>{props.heading}</h1>
        {/* <label for="mybox" className="form-label my-3">Enter your text</label> */}
        <textarea className={`form-control bg-${props.mode} text-${props.mode === "dark"?"light":"dark"}`} id="mybox" rows="8" onChange={handleOnChange} value={text}></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary " onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick} >Copy text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraspaces} >Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h1>your text summary</h1>
            <p>{findWords(text)} words, {text.length} characters </p>
            <p>takes {0.08*text.split(" ").length} minutes to read</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}