import React from "react";

function Data_Fetch() {
  const fetchData = async () => {
    fetch("https://api.github.com/users/wenciu")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return <div>Data_Fetch</div>;
}

export default Data_Fetch;
