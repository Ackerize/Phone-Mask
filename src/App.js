import "./App.css";
import { useState } from "react";

function App() {
  const [phone, setPhone] = useState("");

  const onChange = ({ target }) => {
    const str = target.value;
    if (str.length > 4) {
      const left = str.substr(0, 4);
      let right = str.substr(4, 5);
      right = right.indexOf("-") == -1 ? `-${right}` : right;
      setPhone(`${left}${right}`);
    } else {
      setPhone(str);
    }
  };

  return (
    <div className="App">
      <input name="phone" onChange={onChange} value={phone} />
    </div>
  );
}

export default App;
