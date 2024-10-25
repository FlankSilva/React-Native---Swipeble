import {
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  backgroundColor: ColorValue;
};

export function Option({ icon, backgroundColor, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      {...rest}
      activeOpacity={0.7}
    >
      <MaterialIcons name={icon} size={24} color="#FFFFFF" />
    </TouchableOpacity>
  );
}
