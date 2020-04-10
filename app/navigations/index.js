import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';

import { setRoot } from './setRoot';
import { setOptions } from './setOptions';
import { RegisterScreens } from '../screens';

const startScreen = () => {
  RegisterScreens();
  RootNavigation();
};

const RootNavigation = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Promise.all([
      Icon.getImageSource('home', 24),
      Icon.getImageSource('grid', 24),
      Icon.getImageSource('bell', 24),
      Icon.getImageSource('user', 24),
    ]).then((res) => {
      setRoot(res);
      setOptions();
    });
  });
};

export { startScreen };
