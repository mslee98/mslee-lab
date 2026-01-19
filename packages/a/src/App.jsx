import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "b";

const Home = () => <h1>Project A</h1>;
const About = () => <h1>About Page</h1>;

const unusedValue = 123;

function test() {
  console.log("hello");
}

test();

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">테스트</Link> | <Link to="/about">package/project a</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <Button type="button" variant="contained" text={"테스트 버튼"} />
      </div>
    </BrowserRouter>
  );
}
