import Card from "./components/card";

function App() {
  return (
    <div className="h-screen w-full flex items-center flex-col pt-32">
      <h1 className="font-bold text-xl">Compound Component Pattern</h1>

      <div className="mt-4 max-w-lg space-y-4">
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
          </Card.Header>
          <Card.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            sapiente ab architecto, laborum reprehenderit deleniti quis iste
            laudantium, voluptates adipisci dolores earum animi cum aut.
          </Card.Body>

          <Card.Footer>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Read More
            </button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
