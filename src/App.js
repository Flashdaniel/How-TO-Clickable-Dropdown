import "./styles.css";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    if (open) {
      document.getElementById("myDropdown-content").style.display = "none";
      setOpen(false);
    } else {
      document.getElementById("myDropdown-content").style.display = "block";
      setOpen(true);
    }
  }

  return (
    <div className="dropdown">
      <button onClick={handleClick} className="dropbtn">
        Click Me
      </button>
      <div id="myDropdown-content" className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
  );
}
