import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import Style from "./Button.styles";
import { BUTTON_TYPE } from "./Button.constants";
import Text from "../Text/Text";
import { TEXT_TYPE } from "../Text/Text.constants";

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
      <Text type={TEXT_TYPE.CAPTION} >{children}</Text>
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
