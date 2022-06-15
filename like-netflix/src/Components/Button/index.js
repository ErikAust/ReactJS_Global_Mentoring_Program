import PropTypes from "prop-types";

export const Button = ({ title, style, click, type }) => (
  <button className={style} onClick={click} type={type || "button"}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.string.isRequired,
  click: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
