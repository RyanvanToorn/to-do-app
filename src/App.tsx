import Button from "@components/Button";
import { Title } from "@components/Title";
import AppBar from "@components/AppBar";
import { Card } from "@components/Card";
import { TodoCard } from "@components/Card";
import { CounterCard } from "@components/Card";
import TextField from "@components/TextField";
import { useDeviceClass } from "./hooks/useDeviceClass";

function App() {
  useDeviceClass();

  return (
    <div>
      <AppBar>
        <Title titleText="To-Do" />
      </AppBar>

      <Card />
      <TodoCard />
      <CounterCard title="Cancelled" count={5}></CounterCard>

      <TextField isVisible={false} />
      <Button variant="outlined">Add New +</Button>
    </div>
  );
}

export default App;
