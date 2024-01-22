import Cards from "./Cards";
import ChargeAndLimit from "./ChargeAndLimit";
import Service from "./Service";
import "./style.css";

const Help = () => {
  return (
    <div>
      <img
        src="https://www.bkash.com/uploaded_contents/banners/desktop/05_Career_1665994330192.webp"
        alt=""
      />
      <Cards />
      <Service />
      <ChargeAndLimit/>
    </div>
  );
};

export default Help;
