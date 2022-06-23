import React from "react";
// import React, { useState } from "react";
import style from "./SetupStatus.module.css";
// import data from "../../data/data.json";
import { steps } from "../../data/data";

const SetupStatus = () => {
  let flattenSteps = []
  let isCompleted = []
  let totalSteps = Object.getOwnPropertyNames(steps).length

  for(let i = 0; i < totalSteps; i++){
    flattenSteps[i] = steps[Object.keys(steps)[i]]
  }

  const checkingStepCompletion = (flattenSteps) => {
    for (let i = 0; i < flattenSteps.length; i++) {
      if (flattenSteps[i].status === "complete") {
        isCompleted[i] = (true)
      } else {
        isCompleted[i] = (false)
      }
    }

  };

  checkingStepCompletion(flattenSteps);

  return (
    <div className={style.SetupStatusWrapper}>

      {flattenSteps.map((step, index) => (
        <div
          key={index}
          className={
            index !== flattenSteps.length - 1 ? style.StatusBar : style.EndStatusBar
          }
        >
          <div className={style.StatusText}>
            <div
              className={
                isCompleted[index]
                  ? style.StatusCircleCurrent
                  : style.StatusCircleNotCurrent
              }
            >
              {isCompleted[index] ? (
                  <span className={style.Checkmark}>&#10003;</span>
                  ) : (
                  <>{index + 1}</>
              )}
            </div>
            <div
              className={
                isCompleted[index]
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
                isCompleted[index] ? style.ProcessBar : style.Inactive
              }
            />
          </div>
        </div>
      ))}
    </div>
  );

  // If Json
  // const isCompleted = useState(data.map((x) => false));

  // const checkingStepCompletion = (data) => {
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i].status === "complete") {
  //       isCompleted[i] = true
  //     } else {
  //       isCompleted[i] = false
  //     }
  //   }

  // };

  // checkingStepCompletion(data);

  // return (
  //   <div className={style.SetupStatusWrapper}>
  //     {data.map((step, index) => (
  //       <div
  //         key={index}
  //         className={
  //           index !== data.length - 1 ? style.StatusBar : style.EndStatusBar
  //         }
  //       >
  //         <div className={style.StatusText}>
  //           <div
  //             className={
  //               isCompleted[index]
  //                 ? style.StatusCircleCurrent
  //                 : style.StatusCircleNotCurrent
  //             }
  //           >
  //             {isCompleted[index] ? (
  //                 <span className={style.Checkmark}>&#10003;</span>
  //                 ) : (
  //                 <>{index + 1}</>
  //             )}
  //           </div>
  //           <div
  //             className={
  //               isCompleted[index]
  //                 ? style.StatusNameCurrent
  //                 : style.StatusNameNotCurrent
  //             }
  //           >
  //             {step.name}
  //           </div>
  //         </div>
  //         <div className={style.StatusBarLineCurrent}>
  //           <hr
  //             className={
  //               isCompleted[index] ? style.ProcessBar : style.Inactive
  //             }
  //           />
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default SetupStatus;