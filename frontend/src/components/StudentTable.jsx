import { Link } from "react-router-dom";

function StudentTable({ students }) {
  const departments = {
    1: "CSE",
    2: "ECE",
    3: "EEE",
    4: "MECH",
    5: "CIVIL",
  };

  const skills = {
    1: "React",
    2: "Node.js",
    3: "Java",
    4: "Python",
    5: "SQL",
  };

  return (
    <div
      style={{
        overflowX: "auto",
        
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#2563eb",
              color: "white",
            }}
          >
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Department</th>
            <th style={thStyle}>Skill</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Courses</th>
            <th style={thStyle}>Score</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr
                key={student.id}
                style={{
                  borderBottom: "1px solid #ddd",
                }}
              >
                <td style={tdStyle}>{student.id}</td>

                <td style={tdStyle}>
                  {student.student_name}
                </td>

                <td style={tdStyle}>
                  {student.email}
                </td>

                <td style={tdStyle}>
                  {departments[student.department_id] ||
                    student.department_id}
                </td>

                <td style={tdStyle}>
                  {skills[student.skill_id] ||
                    student.skill_id}
                </td>

                <td style={tdStyle}>
                  {student.status}
                </td>

                <td style={tdStyle}>
                  {student.completed_courses}
                </td>

                <td style={tdStyle}>
                  {student.performance_score}
                </td>

                <td style={tdStyle}>
                  <Link to={`/profile/${student.id}`}>
                    <button
                      style={{
                         background: "#2563eb",
                         color: "white",
                         border: "none",
                         padding: "6px 12px",
                         borderRadius: "5px",
                         fontSize: "14px",
                         cursor: "pointer",
                         width: "100%",
                         maxWidth: "80px",
                      }}
                    >
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="9"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
};

export default StudentTable;