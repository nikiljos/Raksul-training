import React, { useState } from "react";

const JsonATA: React.FC = () => {
  const [data, setData] = useState<object[]>([]);
  const [query, setQyery] = useState<string>();

  const previewData = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
  ];

  function fetchData() {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/jsonATA`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }

  return (
    <div>
      <h1>JSONATA Demo</h1>
      <div
        className="container"
        style={{ display: "flex", gap: "100px", padding: "10px 50px" }}
      >
        <div>
          <h3> DATA </h3>
          {previewData.map((e) => {
            return <p>{JSON.stringify(e)}</p>;
          })}
        </div>
        <div>
          <h3>Apply Filter</h3>
          <form action="/">
            <input
              type="text"
              value={query}
              placeholder="Your Query Here"
              onChange={(e) => {
                setQyery(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                fetchData();
              }}
            >
              FETCH DATA
            </button>

            <div>
              <p>
                <b> Example:</b> "$[age {" > "} 25]"
              </p>
            </div>
          </form>
        </div>
        <div>
          <h3>ANSWER</h3>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JsonATA;
