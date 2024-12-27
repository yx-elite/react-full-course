import { createPortal } from "react-dom";

const SamplePortal = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ position: "absolute", bottom: 3 }}>
          Copied to clipboard
        </div>
      )}
    </section>,
    document.getElementById("sample-portal")
  );
};

export default SamplePortal;
