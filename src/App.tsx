import Button from "@components/Button";
import Title from "@components/Title";

function App() {
  return (
    <div>
      <Title text="To-Do" deviceType="desktop" />
      <Button variant="outlined" deviceType="desktop">
        Add New +
      </Button>
    </div>
  );
}

export default App;
