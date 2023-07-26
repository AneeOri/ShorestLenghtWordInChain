import "./styles.css";

export default function App() {
  function StringToArrLenght() {
    const str = "Let's travel abroad shall w";
    let may = 99;
    let strArr = str
      .split(" ")
      .map((a) => may > Number(a.length) && (may = Number(a.length)));
    console.log(may);
  }

  function findShort() {
    const str = "Let's travel abroad shall w";
    let strArr = Math.min.apply(
      null,
      str.split(" ").map((w) => w.length)
    );
    console.log(strArr);
  }

  function findShort(s) {
    return Math.min(...s.split(" ").map((s) => s.length));
  }

  return (
    <div className="App">
      <button onClick={StringToArrLenght}>String</button>
    </div>
  );
}
