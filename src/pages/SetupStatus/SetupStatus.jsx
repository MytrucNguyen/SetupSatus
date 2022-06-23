import React, { useState } from "react";
import style from "./SetupStatus.module.css";
import { steps } from "../../data/data";

const SetupStatus = () => {
  let flattenSteps = [];
  let totalSteps = Object.getOwnPropertyNames(steps).length;
  let [currentIndex, setCurrentIndex] = useState(0);

  const clickStep = (index) => {
    setCurrentIndex(index);
  };
  console.log(currentIndex);

  for (let i = 0; i < totalSteps; i++) {
    flattenSteps[i] = steps[Object.keys(steps)[i]];
  }

  return (
    <div className={style.SetupStatusWrapper}>
      {flattenSteps.map((step, index) => (
        <div
          key={index}
          className={
            index !== flattenSteps.length - 1
              ? style.StatusBar
              : style.EndStatusBar
          }
        >
          <div className={style.StatusText}>
            <div
              onClick={() => clickStep(index)}
              className={
                currentIndex >= index
                  ? style.StatusCircleCurrent
                  : style.StatusCircleNotCurrent
              }
            >
              {currentIndex >= [index] ? (
                <span className={style.Checkmark}>&#10003;</span>
              ) : (
                <div>{index + 1}</div>
              )}
            </div>
            <div
              className={
                currentIndex >= index
                  ? style.StatusNameCurrent
                  : style.StatusNameNotCurrent
              }
            >
              {step.message}
            </div>
          </div>
          <div className={style.StatusBarLineCurrent}>
            <hr
              className={
                currentIndex >= index ? style.ProcessBar : style.Inactive
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SetupStatus;
