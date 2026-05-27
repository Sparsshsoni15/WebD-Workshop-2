import Student from "./student";
function App() {
  return (
    <div>
      <h1>Student Information</h1>
      <Student
        name="Sparsh Soni"
        course="ELCE"
        marks="95" />
      <Student
        name="Nishant Verma"
        course="Information Technology"
        marks="92" />
      <Student
        name="Shivangi Verma"
        course="Electronics"
        marks="88" />
    </div>
  );
}
export default App;