import { useState } from "react";
import SamplePortal from "./SamplePortal";

const CopyInput = () => {
  const [copied, setCopied] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleCopy}>Copy Text</button>
      <SamplePortal copied={copied} />
    </div>
  );
};

export default CopyInput;
