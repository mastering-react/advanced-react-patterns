import Button from "./components/button";
import Input from "./components/input";
import Textarea from "./components/textarea";

function App() {
  return (
    <div className="h-screen w-full flex items-center flex-col pt-32">
      <h1 className="font-bold text-xl">Higher Order Componet Pattern</h1>

      <div className="mt-4 max-w-lg space-y-4">
        <Input type="text" placeholder="Enter your name" />
        <Textarea placeholder="Enter your message" />
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default App;
