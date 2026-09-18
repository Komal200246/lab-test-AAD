import { useState } from "react";
import MembershipForm from "./Components/MembershipForm";
import MembershipCard from "./Components/MembershipCard";

function App() {
  const [student, setStudent] = useState(null);

  const handleMembershipSubmit = (formData) => {
    setStudent(formData);
  };

  return (
    <div className="app">
      <div className="library-header">
        <div className="library-icon">📚</div>

        <h1>University Library</h1>

        <p>Join our library and explore a world of knowledge</p>
      </div>

      <MembershipForm onSubmit={handleMembershipSubmit} />

      {student && <MembershipCard student={student} />}
    </div>
  );
}

export default App;