// app/talent-pool/page.jsx

import React from "react";

const TalentPool = () => {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        style={{
          height: "900px",
          width: "900px",
          maxWidth: "90%",
          maxHeight: "90%",
          border: "none",
        }}
        src="https://recruitcrm.io/talent_pool_submission/Talent_Pool?1719434320697"
      ></iframe>
    </main>
  );
};

export default TalentPool;
