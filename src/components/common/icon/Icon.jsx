import PropTypes from "prop-types";
import robotHead from "../../../images/icons/robot-head.png";
import cat from "../../../images/icons/cat.png";
import pin from "../../../images/icons/pin.png";
import pencil from "../../../images/icons/pencil.png";
import handPointing from "../../../images/icons/hand-pointing.png";

function Icon({ variant, label, size = 24 }) {
  function getVariant(variant) {
    switch (variant) {
      case "robot":
        return robotHead;
      case "cat":
        return cat;
      case "pin":
        return pin;
      case "pencil":
        return pencil;
      case "handpointing":
        return handPointing;
      default:
        return pin; // Înlocuit cu o valoare implicită sau poți returna null sau o altă imagine implicită
    }
  }

  return <img src={getVariant(variant)} alt={label} height={size} />;
}

Icon.propTypes = {
  variant: PropTypes.oneOf(["robot", "cat", "pin", "pencil", "handpointing"])
    .isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
