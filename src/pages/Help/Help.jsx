import Cards from "./Cards";
import ChargeAndLimit from "./ChargeAndLimit";
import Service from "./Service";
import "./style.css";

const Help = () => {
  return (
    <div>
      <div className=" flex gap-4 items-center justify-center h-[400px] bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center"></div>
      <Cards />
      <Service />
      <ChargeAndLimit />
    </div>
  );
};

export default Help;
