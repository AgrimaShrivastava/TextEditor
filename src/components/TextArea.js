import React ,{useState} from 'react';

export default function TextArea(props) {
    const handleUpClick = () => {
        //console.log("UpperCase clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }

    const handleLoClick = () => {
        //console.log("UpperCase clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");   
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value)
    }

    const handleClear = () => {
        //console.log("UpperCase clicked"+text);
        setText("");
        props.showAlert("Text Cleared!","success");
    }

    const handleCopy = () => 
    {
        var text = document.getElementById("exampleFormControlTextarea1"); 
        text.select(); 
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to clipboard!","success");
    }
        
    const handleExtraSpaces =  () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success");
    }
    
    function textLength()
    {
        if(text.length==0)
        {
            return text.split(" ").length-1;     
        }
        else{
                return text.split(" ").length;
        }
    }

    function btnColor(x)
    {
        if(x==='dark' || x==='light')
        {
            return 'primary';
        }
        else{
            return x;
        }
    }
    const [text,setText] = useState("");
   // setText("This is text");
  return (
    <>
   
    <div className ={`container text-${props.mode=='light'?'dark':'light'}`}>
         <h1>{props.heading}</h1>
         <div className="mb-3" >
           <textarea className="form-control" style={{backgroundColor:props.mode=='dark'?'grey':'white' ,color: props.mode=='dark'?'white':'black'}} value ={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" ></textarea>
         </div>
         <button className={`btn btn-${btnColor(props.mode)} mx-1`} onClick={handleUpClick}>Covert to Upper Case</button>
         <button className={`btn btn-${btnColor(props.mode)} mx-1`} onClick={handleLoClick}>Covert to Lower Case</button>
         <button className={`btn btn-${btnColor(props.mode)} mx-1`} onClick={handleClear}>Clear</button>
         <button className={`btn btn-${btnColor(props.mode)} mx-1`} onClick={handleCopy}>Copt Text</button>
         <button className={`btn btn-${btnColor(props.mode)} mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    
    <div className={`container my-3 text-${props.mode=='light'?'dark':'light'}`}>
        <h2>Text Description</h2>
        <p>{textLength()} Words and {text.length} Letters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview here'}</p>
    </div>
    </>
  )
}
