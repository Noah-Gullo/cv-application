export default function TextField({text = "Enter here", handleValue}){
  return (
    <input placeholder={text} className="textField" onChange={(e) => handleValue(e.target.value, text)}></input>
  );
}