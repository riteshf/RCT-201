import React from "react";

interface MybuttonProps {
  /**
   * If true this will disbale the button
   */
  disabled: boolean;
  /**
   * Onc click of button this function is executed
   */
  onClick: Function;
}
const MyButton = ({ disabled = false, onClick }: MybuttonProps) => {
  return (
    <button disabled={disabled} onClick={() => onClick()}>
      MyButton
    </button>
  );
};

export default MyButton;
