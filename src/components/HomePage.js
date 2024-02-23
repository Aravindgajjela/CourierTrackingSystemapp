import React from "react";

function App() {
  const bgStyle = {
    backgroundImage: `url('https://res.cloudinary.com/djllxgzm0/image/upload/v1708579917/pexels-rdne-stock-project-7362888_be2n42.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "98vw",
    height: "150vh",
  };

  return <div style={bgStyle}></div>;
}

export default App;
