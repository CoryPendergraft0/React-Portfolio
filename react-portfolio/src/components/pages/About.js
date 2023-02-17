import React from "react";
import myself from "../../assets/images/self.jpeg";

const styles = {
  myimg: {
    height: 300,
    width: "auto",
    borderRadius: 300,
  },
  shadow: {
    border: "1px solid beige",
    boxShadow: "2px 20px 18px #D6CCC2",
  },
};

export default function About() {
  return (
    <>
      <div className="row m-2 p-3">
        <h1 className="text-center"> About Me </h1>
      </div>
      <div className="min-vh-100">
        <div className="row m-2 p-3">
          <div className="d-flex justify-content-center mb-3">
            <img src={myself} alt="me" style={styles.myimg} />
          </div>
          <div
            className="d-flex justify-content-evenly text-center"
            style={styles.shadow}
          >
            <p className="fs-4 p-2 d-flex justify-content-center">
              Hey! <br />
              Hey there! My names Cory, and im a full stack student in my bootcamp at UNC Charlotte! I was born in the UK and moved to Florida close after that. My family was military so I moved around a good bit. I am looking forward to expanding my knowledge on React and coding overall! <br /> Some hobbies of mine include Skydiving, shooting, gaming, and anything outdoors!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}