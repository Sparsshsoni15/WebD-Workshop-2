import "./App.css";

function Student(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Details</h1>

      <div className="card-container">
        <Student name="Animesh" course="BCA" marks={85} />
        <Student name="Rahul" course="BTech" marks={78} />
        <Student name="Priya" course="BSc" marks={92} />
      </div>
    </div>
  );
}

export default App;
