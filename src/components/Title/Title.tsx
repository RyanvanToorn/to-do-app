import React from "react";
import type { TitleProps } from "./Title.types";
import Styles from "./Title.module.css";

/**
 * Title Component
 * Intended to be used wherever a large/central title is required.
 */

export const Title: React.FC<TitleProps> = ({ titleText = "To-Do", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return null;

  return (
    <div className={`${Styles.TitleWrapper} title-wrapper ${extendedClass}`} style={inlineStyles}>
      <div className={`${Styles.Title} title`}>
        <label className={`${Styles.Label} title-label`}>{titleText}</label>
      </div>
    </div>
  );
};
