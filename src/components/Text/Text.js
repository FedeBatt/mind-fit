import PropTypes from "prop-types";
import { Text as RNText } from "react-native";
import Style from "./Text.styles";
import { TEXT_TYPE } from "./Text.constants";

const Text = ({ children, type, style, ...rest }) => {
  
  return (
    <RNText style={[Style[type], style]} {...rest}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  type: TEXT_TYPE.BODY,
  style: null,
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
};

export default Text;
