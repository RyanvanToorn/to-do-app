import Button from "@components/Button";
import Title from "@components/Title";
import AppBar from "@components/AppBar";
import { useDeviceClass } from "./hooks/useDeviceClass";

function App() {
  // Applies a conditional class to the <body> element.
  useDeviceClass();

  return (
    <div>
      <AppBar>
        <Title text="To-Do" />
      </AppBar>

      <Button variant="outlined">Add New +</Button>
    </div>
  );
}

export default App;
