import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

// const heading = React.createElement("h1",null,"Min Ga lar Par");

const App = () => {
  const courses = [
    {
      id: 1,
      title: "Special Web Design",
      studentCount : 5
    },
    {
      id: 2,
      title: "Web App Development",
      studentCount : 4
    },

    {
      id: 3,
      title: "Web Dev Foundation",
      studentCount : 0
    },
    {
      id: 4,
      title: "Basic UI Design",
      studentCount : 2
    },
    {
      id: 5,
      title: "Premium UI Design",
      studentCount : 15
    },
  ];

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Courses Lists"),
  //   React.createElement("ul",null,React.createElement("li",null,"Special Web Design"),React.createElement("li",null,"Web Application Development"),React.createElement("li",null,"Basic UI Design"),React.createElement("li",null,"Premium UI Design"))
  // );

  return React.createElement(
    "div",
    {
      className:"p-10 border-2 border-gray-400 m-10"
    },
    React.createElement("h1",{className:"font-serif font-bold text-blue-500 text-3xl mb-10"},"Our Courses Lists"),
    React.createElement(
      "ul",
      null,
      courses.filter(({studentCount}) => studentCount>0).map(({id,title,studentCount}) => React.createElement("li", {key:id,className:`font-mono ${studentCount <3 ? "bg-red-200":"bg-gray-200"} mb-3 p-2 border-s-4`},studentCount," ",title))
    )
  );
};

root.render(App());
