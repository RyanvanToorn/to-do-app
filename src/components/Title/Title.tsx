import React from "react";
import type { TitleProps } from "./Title.types";
import TitleStyles from "./Title.module.css";

/**
 * Title Component
 * Intended to be used wherever a large/central title is required.
 */

export const Title: React.FC<TitleProps> = ({ titleText = "To-Do", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`${TitleStyles.TitleWrapper} title-wrapper ${extendedClass}`} style={inlineStyles}>
      <div className={`${TitleStyles.Title} title`}>
        <label className={`${TitleStyles.Label} title-label`}>{titleText}</label>
      </div>
    </div>
  );
};
