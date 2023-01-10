import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Books } from "./books";

function App() {
  const [query, setQuery] = useState("");

  const keys = ["name", "author", "page"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <h1>Library Application</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Books)} />
    </div>
  );
}

export default App;
