import { IButton } from "../../types/base";
import "./style.scss";

const Button = ({ style, children }: IButton) => {
  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
};
export default Button;
