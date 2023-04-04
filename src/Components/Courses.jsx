import React from 'react';

function Courses({ randomCourse }) {
  return (
    <div className=" card-Container ">
      <div>
        <div className="card-Title">{randomCourse.title}</div>
        <div className="  card-Desc ">{randomCourse.content}</div>
      </div>
    </div>
  );
}

export default Courses;
