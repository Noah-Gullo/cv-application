import TextField from "./TextField";

function GeneralInfo(){
  return (
    <section>
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