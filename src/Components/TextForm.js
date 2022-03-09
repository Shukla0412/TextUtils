import React , {useState} from 'react'
//Importing usedstate hook from react
// const [text, setText] = useState('Enter Text here');
//text is the var having default value text here.
export default function TextForm(props) {
      const handleUpclick=()=>{
      let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to upper case","success");
        
      }
      const handleLoclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower case","success");
      }
      const Textclear=()=>{
        let newtext=' ';
        setText(newtext);
      }
      const emailExtracter=(text)=>{let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let wordd=text.split(" ");
      if (wordd.match(regexEmail)) {
        let mail=wordd;
        let newtext=mail;
        setText(newtext);}
      }
      const capitalise=()=>{
        let firstchar=text.charAt[0];
        console.log(firstchar);
        let newtext=firstchar.toUpperCase();
        setText(newtext+text.slice(1).toLowerCase());
        document.title='Textutils-Darkmode';//to change title dynamically
        }
   
   
   const handlecopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");
   }
   const Removetrapace =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));

   }
   
  const handleOnchange=(event)=>{//onchange is a event listener ki text area m kch daale to vo settext m aajae lekin jo setext m h vo
    setText(event.target.value); //rhega hi without onchange we can not edit textarea
   }
  const [text, setText] = useState('Enter Text here');//Now we cannot change text like normal we have to use
  //setText function    text="okk"; is wrong
  //setText("okk");  correct
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
          <div className="mb-3">
            <h1>{props.heading }
              </h1>
            <label htmlFor="mybox" className="form-label"></label>
            <textarea className="form-control" value=  {text} onChange={handleOnchange}  style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}  id="mybox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to lowercase</button>
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Textclear}>Clear text</button>
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={Removetrapace}>Remove Extra Spaces</button>
          <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
         
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>   Your text summary   </h1>
      <p>   {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} charcters   </p>
      <p>    Time taken in minutes to read is {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes.    </p>
      <h2>    Preview    </h2>
      <p>  {text.length>0?text:"Ënter Your text above to preview"}   </p>
    </div>
    </>
  )
  }
  