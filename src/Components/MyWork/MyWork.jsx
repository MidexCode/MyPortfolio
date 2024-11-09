import React from "react";
import themepattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

export const MyWork = () => {
  return (
    <>
      <div id="portfolio" className="mywork">
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          {/* <img src={themepattern} alt="" /> */}
        </div>

        <div className="mywork-container">
          {mywork_data.map((work, index) => {
            return (
              <img key={index} src={work.w_img} alt="" className="mywork-img" />
            );
          })}
        </div>
      </div>
    </>
  );
};
