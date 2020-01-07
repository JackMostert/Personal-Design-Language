import React from "react";
import "./App.scss";
import TextInput from "./Components/TextInput/Index";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextInput type="text" length="normalLength" size="normalSize" />
    </div>
  );
};

export default App;
