import {
  Link,
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Courseworks from "./Courseworks";
import Experiences from "./Experiences";
import { Spotify } from "react-spotify-embed";

export function NavBar() {
  return (
    <div>
      <nav className="bg-plant py-6 flex justify-end">
        <Link to="/" className="text-plant-light font-extrabold hover:text-sky-300 ml-4">
          Home
        </Link>
        <Link to="/courseworks" className="text-plant-light font-extrabold hover:text-sky-300 mx-4">
          {" "}
          Coursework
        </Link>
        <Link to="/experiences" className="text-plant-light font-extrabold hover:text-sky-300 mr-4">
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

function Interest({ interest }) {
  return <li>{interest}</li>;
}
export default function Home() {
  const hobbies = ["Listen to music", "Learn to craft"];
  const interests = ["Quality Assurance", "Web Security", "DevSecOps"];
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="text-plant-light">
          <h1 className="font-extrabold md:text-4xl py-4">Hello I'm Kelly!</h1>
          <h1 className="font-extrabold md:text-4xl"> I plant things. </h1>

          <div className="py-4 font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
            I am interested in{" "}
            <span className="text-sky-300 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block text-left animate-text-slide leading-tight [&_li]:block">
                {interests.map((i) => (
                  <Interest key={i} interest={i} />
                ))}
                <li aria-hidden="true">{interests[0]}</li>
              </ul>
            </span>
          </div>
          <p className="font-extrabold md:text-4xl">
            {" "}
            Outside of my technology hermit, I like to:{" "}
          </p>
          <ul className="font-bold md:text-3xl py-4">
            {hobbies.map((h) => (
              <Hobby hobby={h} key={h} />
            ))}
          </ul>
          <Spotify
            wide
            className="m-8"
            link="https://open.spotify.com/track/3CVeGXpoPKJQ9JuhPp3mpL?si=06b8df1aab224e7f"
          />
          <p className="font-extrabold md:text-4xl">Come buzz and learn more about me! 🌸🐝</p>
        </div>
        <div>
          <img src="plant-bear.png" alt="Plant bear"></img>
        </div>
      </div>
    </div>
  );
}
