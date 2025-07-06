import { Button } from "@components/Button";
import { Title } from "@components/Title";
import { AppBar } from "@components/AppBar";
import { Card } from "@components/Card";
import { TodoCard } from "@components/Card";
import { CounterCard } from "@components/Card";
import { TextField } from "@components/TextField";
import { useDeviceClass } from "./hooks/useDeviceClass";

function App() {
  useDeviceClass();

  return (
    <div>
      <AppBar>
        <Title titleText="To-Do" />
      </AppBar>

      <div>
        <CounterCard title="Cancelled" count={5}></CounterCard>
        <CounterCard title="In-progress" count={3}></CounterCard>
        <CounterCard title="Completed" count={10}></CounterCard>
        <CounterCard title="Overdue" count={2}></CounterCard>
      </div>

      <TextField isVisible={false} />
      <Button variant="outlined">Add New +</Button>
    </div>
  );
}

export default App;
