import TextField from "./TextField.jsx";

function GeneralInfo(){
  return (
    <section id="GeneralInfo">
      <h1>General Information</h1>
      <form>
        <TextField text="Name"/>
        <TextField text="Email"/>
        <TextField text="Phone Number"/>
      </form>
    </section>
  );
}

export default GeneralInfo