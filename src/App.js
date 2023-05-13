import "./App.css";
import BankDetails from "./components/BankDetails/BankDetails";
import BasicDetails from "./components/BasicDetails/BasicDetails";
import TaxDetails from "./components/TaxDetails/TaxDetails";
import UserDocuments from "./components/UserDocuments/UserDocuments";

function App() {
  return (
    <div className="app">
      <BasicDetails />
      <TaxDetails />
      <BankDetails />
      <UserDocuments />
    </div>
  );
}

export default App;
