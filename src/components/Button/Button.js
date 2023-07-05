import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import Style from "./Button.styles";
import { BUTTON_TYPE } from "./Button.constants";

const Button = ({
  children,
  disabled,
  onPress,
  type,
  isLoading = false,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={Style[type]}
      {...rest}
    >
      <Text style={Style.text}>{children}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: BUTTON_TYPE.PRIMARY,
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
