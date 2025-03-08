import Toggle from "./components/toggle";

function App() {
  return (
    <div className="h-screen w-full flex items-center flex-col pt-32">
      <h1 className="font-bold text-xl">Render Props Pattern</h1>

      <div className="mt-4">
        <Toggle>
          {/* Enabled */}
          {(checked) => {
            return checked ? "Enabled" : "Disabled";
          }}
        </Toggle>
      </div>
    </div>
  );
}

export default App;
