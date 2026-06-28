function TextField({text = "Enter here"}){
  return (
    <input placeholder={text} className="textField"></input>
  );
}

export default TextField;