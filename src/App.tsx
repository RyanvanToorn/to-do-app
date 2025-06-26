import Button from "@components/Button";
import Title from "@components/Title";
import AppBar from "@components/AppBar";
import Card from "@components/Card";
import TextField from "@components/TextField";
import { useDeviceClass } from "./hooks/useDeviceClass";

function App() {
  // Applies a conditional class to the <body> element for device specific styling.
  useDeviceClass();

  return (
    <div>
      <AppBar>
        <Title text="To-Do" />
      </AppBar>

      <Card />

      <TextField isVisible={false} />
      <Button variant="outlined">Add New +</Button>
    </div>
  );
}

export default App;
