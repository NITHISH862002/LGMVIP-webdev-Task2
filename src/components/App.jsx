import React from "react";
import Card from "./Card";
import Users from "../Users";
function Entry(emoj) {
  return (
    <Card
      key={emoj.id}
      first_name={emoj.first_name}
      second_name={emoj.last_name}
      avatar={emoj.avatar}
      email={emoj.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <dl className="dictionary">{Users.map(Entry)}</dl>
    </div>
  );
}

export default App;
