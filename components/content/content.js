import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import "./content.scss";

const Content = withNavigationContext(({ fullpage, main, action }) => {
  return (
    <div className="content">
      <div className="content__main">{main}</div>
    </div>
  );
});

export default Content;
