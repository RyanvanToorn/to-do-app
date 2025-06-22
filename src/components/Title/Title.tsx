import React from "react";
import type { TitleProps } from "./Title.types";
import TitleStyles from "./Title.module.css";

const Title: React.FC<TitleProps> = ({ text = "To-Do", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`${TitleStyles.Title} title-wrapper ${extendedClass}`} style={inlineStyles}>
      <label className={`${TitleStyles.Label} title-label`}>{text}</label>
    </div>
  );
};

export default Title;
