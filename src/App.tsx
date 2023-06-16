import { Fragment } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import CustomButton from "./components/CustomButton";

function App() {
  const handleOnselectedItem = (item: string) => console.log(item);
  const handleOnClick_button = () => console.log("clicked");
  let items = ["New York", "Fes", "Casablanca", "Paris", "London", "Tokyo"];
  // return <Fragment><ListGroup items={items} heading="Cities" onselectedItem={handleOnselectedItem} /></Fragment>;
  let show_alert = 0;
  return (
    <Fragment>
      <Alert>
        <span>altert</span>
      </Alert>
      <CustomButton color="danger" onClick={() => show_alert=1}>
        <h1>anas</h1>
      </CustomButton>
    </Fragment>
  );
  return (
    <CustomButton color="danger" onClick={() => console.log("clicked")}>
      <h1>anas</h1>
    </CustomButton>
  );
}

export default App;
