import "./App.css";

function StudentCard({ image, name, course, year, cgpa }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="student-image" />

      <div className="details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>CGPA:</strong> {cgpa}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Profile Dashboard</h1>

      <div className="dashboard">
        <StudentCard
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
          name="Rahul Sharma"
          course="B.Tech CSE"
          year="3rd Year"
          cgpa="8.5"
        />

        <StudentCard
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
          name="Priya Singh"
          course="BCA"
          year="2nd Year"
          cgpa="9.1"
        />
      </div>
    </div>
  );
}

export default App;