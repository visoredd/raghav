import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Content from "../Content/Content";
function Home() {
  return (
    <main className="main">
      <div>UI/UX &gt; Refer & Earn</div>
      <Dashboard />
      <Content />
      <div className="footer">
        <h4>Friends Who Enrolled</h4>
        <h4>Terms & Conditions</h4>
      </div>
    </main>
  );
}

export default Home;
