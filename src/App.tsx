import { Fragment } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import CustomButton from "./components/CustomButton";
import { useState } from "react";

function App() {
  const handleOnselectedItem = (item: string) => console.log(item);
  const handleOnClick_button = () => console.log("clicked");
  let items = ["New York", "Fes", "Casablanca", "Paris", "London", "Tokyo"];
  // return <Fragment><ListGroup items={items} heading="Cities" onselectedItem={handleOnselectedItem} /></Fragment>;
  let show_alert_var = false;
  const [alter_visible, setVisible_alter] = useState(false);
  return (
    <Fragment>
      <Alert show_altert={alter_visible} set_or_unset_altert={setVisible_alter}>
        <span>alter message</span>
      </Alert>
      <CustomButton color="danger" onClick={() => setVisible_alter(true)}>
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
