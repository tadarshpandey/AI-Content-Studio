
// const name = "Adarsh";

// import Feature from "./Component/Feature";
// import Navbar from "./Component/Navbar";
// import Sidebar from "./Component/Sidebar";


// import "./App.css";
// import { useState, useCallback } from "react";
// import Operations from "./Component/Operations";




// function App() {
// // a function made...
//   // const handleClick = () => {
//   //   setCount(count + 1)
//   // }

//   // const handleClickMemo = useCallback(() => {
//   //   setCount(c => c+1)
//   // }, []);




//   return (
//     <>
//     <Navbar/>
   
//       <div className="container">
//         <Sidebar/>
//         <div className='content'>



//         {/* <h1>AI-content-studio</h1>
//         <h2>my content</h2>
//         <p>---------------------------------------------------------------------------------------------------</p>
//         <h3>my name is : {name}</h3>


//         <p>count: {setCount}</p>
        
//         <button onClick={handleClickMemo}>
//           handleClickMemo
//         </button> */}






//         {/* <Operations/> */}

//         {/* <div className="feature-content">
//           <Feature/>
//         </div> */}
//         {/* <p>---------------------------------------------------------------------------------------------------</p>
//         <h6>thank you to reading this. Byyeee</h6>       */}


//       </div>
     
//       </div>
      
//     </>
//   )
// }

// export default App



import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
import BlogGenerator from "./Component/BlogGenerator";
import "./App.css";

function App() {

  return (

    <>
      <Navbar />

      <div className="app-container">

        <Sidebar />

        <div className="app-content">

          <BlogGenerator />

        </div>

      </div>
    </>
  );
}

export default App;
