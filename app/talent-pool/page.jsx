// import React from "react";

// const TalentPool = () => {
//   return (
//     <main style={{ display: "flex", justifyContent: "center" }}>
//       <iframe
//         style={{
//           height: "900px",
//           width: "1400px",
//           maxWidth: "90%",
//           maxHeight: "90%",
//           // border: "none",
//           border: "1px solid black",
//         }}
//         src="https://recruitcrm.io/talent_pool_submission/Talent_Pool?1719434320697"
//       ></iframe>
//     </main>
//   );
// };

// export default TalentPool;

import React from "react";

const TalentPool = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 15px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          src="/Lets_Connect_Wide.png"
          alt="Logo"
          style={{ width: "100%", maxWidth: "1400px" }}
        />
        <br /><br /><br />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <iframe
          style={{
            height: "900px",
            width: "100%",
            maxWidth: "1400px",
            maxHeight: "90%",
            border: "1px solid black",
          }}
          src="https://recruitcrm.io/talent_pool_submission/Talent_Pool?1719434320697"
        ></iframe>
      </div>
    </main>
  );
};

export default TalentPool;
