import { ButtonStyles } from './ButtonStyle.style.js';

export const Button = ({ children, className, onClick, disabled }) => {
  return (
    <>
      <ButtonStyles>
        <button onClick={onClick} className={`btn_${className}`} disabled={disabled}>{children} </button>
      </ButtonStyles>
    </>

  );
};
