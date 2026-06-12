import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

function Profile() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const departments = {
    1: "CSE",
    2: "ECE",
    3: "EEE",
    4: "MECH",
    5: "CIVIL",
  };

  const skills = {
    1: "React",
    2: "Node",
    3: "Java",
    4: "Python",
    5: "SQL",
  };

  useEffect(() => {
    API.get(`/students/${id}`).then((res) => setStudent(res.data));
  }, [id]);

  if (!student) return <h3>Loading...</h3>;

  return (
    <div style={styles.container}>

      <Link to="/">
        <button style={styles.backBtn}>← Back</button>
      </Link>

      <div style={styles.card}>
        <h2>{student.student_name}</h2>

        <p><b>Email:</b> {student.email}</p>

        <p><b>Department:</b> {departments[student.department_id]}</p>

        <p><b>Skill:</b> {skills[student.skill_id]}</p>

        <p><b>Status:</b> {student.status}</p>

        <p><b>Completed Courses:</b> {student.completed_courses}</p>

        <p><b>Score:</b> {student.performance_score}</p>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "20px" },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  backBtn: {
    marginBottom: "15px",
    padding: "8px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};

export default Profile;