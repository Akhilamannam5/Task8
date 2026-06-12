function FilterSection({
  department,
  setDepartment,
  skill,
  setSkill,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="1">CSE</option>
        <option value="2">ECE</option>
        <option value="3">EEE</option>
        <option value="4">MECH</option>
        <option value="5">CIVIL</option>
      </select>

      <select
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      >
        <option value="">All Skills</option>
        <option value="1">React</option>
        <option value="2">Node.js</option>
        <option value="3">Java</option>
        <option value="4">Python</option>
        <option value="5">SQL</option>
      </select>
    </div>
  );
}

export default FilterSection;