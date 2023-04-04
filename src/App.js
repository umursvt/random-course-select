import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Courses from './Components/Courses';

function App() {
  const [courses, setCourses] = useState([]);
  const [randomCourse, setRandomCourse] = useState([]);

  //fetching data from data.json
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/courses');
    setCourses(response.data);
  };

  //gets random course
  const getRandomCourse = () => {
    //generates random number
    const randomIndex = Math.floor(Math.random() * courses.length);
    //it throws in the randodm number to courses
    return courses[randomIndex];
  };

  //keeps the data rendering
  useEffect(() => {
    fetchData();
  }, []);

  //
  const handleRandomCourse = () => {
    const course = getRandomCourse();
    setRandomCourse(course);
  };

  //it goes Left
  const handleLeft = () => {
    const randomIndex = courses.findIndex(
      (course) => course.id === randomCourse.id
    );
    const newRandomIndex = randomIndex - 1;
    if (newRandomIndex >= 0) {
      const newRandomCourse = courses[newRandomIndex];
      setRandomCourse(newRandomCourse);
    }
  };

  //it goes Right
  const handleRight = () => {
    const randomIndex = courses.findIndex(
      (course) => course.id === randomCourse.id
    );
    const newRandomIndex = randomIndex + 1;
    if (newRandomIndex >= 0) {
      const newRandomCourse = courses[newRandomIndex];
      setRandomCourse(newRandomCourse);
    }
  };

  return (
    <div className="App">
      <div className=" container ">
        <div className="btn-container">
          <button onClick={handleLeft}>Left</button>
          <button onClick={handleRandomCourse}>Random Course</button>
          <button onClick={handleRight}>Right</button>
        </div>

        <h2>Random Course Select Menu</h2>
        <Courses randomCourse={randomCourse} />
      </div>
    </div>
  );
}

export default App;
