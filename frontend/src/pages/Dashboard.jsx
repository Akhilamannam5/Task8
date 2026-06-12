import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardCard from "../components/DashboardCard";
import StudentTable from "../components/StudentTable";
import SearchBar from "../components/SearchBar";
import FilterSection from "../components/FilterSection";

function Dashboard() {
  const [stats, setStats] = useState({});
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [skill, setSkill] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 3;

  useEffect(() => {
    API.get("/dashboard/stats").then((res) => setStats(res.data));
    API.get("/students").then((res) => setStudents(res.data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, department, skill]);

  const filteredStudents = students.filter((s) => {
    const searchMatch =
      s.student_name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toString().includes(search);

    const deptMatch = department === "" || s.department_id == department;
    const skillMatch = skill === "" || s.skill_id == skill;

    return searchMatch && deptMatch && skillMatch;
  });

  const last = currentPage * studentsPerPage;
  const first = last - studentsPerPage;
  const currentStudents = filteredStudents.slice(first, last);

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  return (
    <div style={styles.container}>

      {/* TITLE */}
      <h1 style={styles.title}>Student Dashboard</h1>

      {/* SEARCH + FILTER */}
      <div style={styles.topBar}>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSection
          department={department}
          setDepartment={setDepartment}
          skill={skill}
          setSkill={setSkill}
        />
      </div>

      {/* STATS CARDS */}
      <div style={styles.cardGrid}>
        <DashboardCard title="Total Students" value={stats.totalStudents || 0} />
        <DashboardCard title="Active Students" value={stats.activeStudents || 0} />
        <DashboardCard title="Completed Courses" value={stats.completedCourses || 0} />
        <DashboardCard
  title="Average Score"
  value={`${Math.round(stats.averageScore || 0)}%`}
/>
      </div>

      {/* TABLE SECTION */}
      <div style={styles.tableBox}>
        <h2>Student List</h2>

        <StudentTable students={currentStudents} />

        {/* PAGINATION */}
        <div style={styles.pagination}>
          <button disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
            Prev
          </button>

          <span>Page {currentPage} of {totalPages || 1}</span>

          <button disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
  },

  title: {
    marginBottom: "20px",
  },

  topBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "30px",
  },

  tableBox: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },
};

export default Dashboard;