import Button from "@components/Button";
import Title from "@components/Title";
import { useDeviceClass } from "./hooks/useDeviceClass";

function App() {
  // Applies a conditional class to the <body> element.
  useDeviceClass();

  return (
    <div>
      <Title text="To-Do" />
      <Button variant="outlined">Add New +</Button>
    </div>
  );
}

export default App;
