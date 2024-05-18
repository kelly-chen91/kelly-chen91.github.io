import {
  Link,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Courseworks from "./Courseworks";
import Experiences from "./Experiences";

export function NavBar() {
  return (
    <div>
      <nav className="bg-plant py-6 flex justify-end">
        <Link to="/" className="text-plant-light mx-4">
          Home
        </Link>
        <Link to="/courseworks" className="text-plant-light mx-4">
          {" "}
          Coursework
        </Link>
        <Link to="/experiences" className="text-plant-light mx-4">
          {" "}
          Experiences
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Hobby({ hobby }) {
  return <li>🌱 {hobby}</li>;
}
export default function Home() {
  const hobbies = ["Listen to music", "Learn to craft"];
  /*
  Divide 100% by 3 (the actual number of elements in the list): 100% / 3 = 33.3%
  Calculate the transition time, defined as 1/3: 33.3% / 3 = 11.1%
  Calculate the dwell time, defined as 2/3: 33.3% / 3 * 2 = 22.2%

  Translation values: 100/4 = 25%
  0%
  25%
  50%
  75%
  100%
  */
  return (
    <div className="text-plant-light p-8">
      <h1 className="font-bold text-3xl">Hello I'm Kelly</h1>
      <p> I plant things. </p>

      <div class="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        I am interested in{" "}
        <span class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul class="block text-left animate-text-slide leading-tight [&_li]:block">
            <li>Quality Assurance</li>
            <li>Web Security</li>
            <li>DevSecOps</li>
            <li aria-hidden="true">Quality Assurance</li>
          </ul>
        </span>
      </div>
      <p> Outside of my technology hermit, I like to: </p>
      <ul>
        {hobbies.map((h) => (
          <Hobby hobby={h} />
        ))}
      </ul>
      <img src="plant-bear.png" alt="Plant bear"></img>
    </div>
  );
}
