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

// https://api.github.com/users/wenciu

// function Advice() {
//     const [advice, setAdvice] = useState([]);

//     const fetchData = async () => {
//       fetch("https://api.adviceslip.com/advice")
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           setAdvice(data.slip);
//         });
//     };

//     useEffect(() => {
//       fetchData();
//     }, []);

//     return (
//       <div className="bg">
//         <div className="container">
//           <p>ADVICE # {advice.id}</p>
//           <div className="advice">
//             <h2>{advice.advice}</h2>
//           </div>
//           <div className="circle">
//             <img className="dice" src={Dice} alt="Dice" onClick={fetchData} />
//           </div>
//         </div>
//       </div>
//     );
//   }
