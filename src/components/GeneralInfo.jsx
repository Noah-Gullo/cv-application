import TextField from "./TextField.jsx";

function GeneralInfo(){
  return (
    <section id="GeneralInfo">
      <h1>General Information</h1>
      <TextField text="Name"/>
      <TextField text="Email"/>
      <TextField text="Phone Number"/>
    </section>
  );
}

export default GeneralInfo