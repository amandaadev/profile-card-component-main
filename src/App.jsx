import Card from "./components/card/index";

const peoples = [
  {
    name: "Victor Crest",
    idade: "26",
    local: "London",
    numeros: {
      followers: 80,
      likes: 803,
      photos: 1.4,
    },
  },
];
function App() {
  return (
    <>
      <div className="absolute -top-1/3 -left-48 z-0">
        <img src="/images/bg-pattern-top.svg" alt="" />
      </div>
      <div className="absolute -bottom-72 -right-48 z-0">
        <img src="/images/bg-pattern-bottom.svg" alt="" />
      </div>
      <div className="flex h-full gap-8 justify-center">
        {peoples.map((people, index) => (
          <Card
            key={index}
            name={people.name}
            idade={people.idade}
            local={people.local}
            numeros={people.numeros}
          />
        ))}
      </div>
    </>
  );
}

export default App;
