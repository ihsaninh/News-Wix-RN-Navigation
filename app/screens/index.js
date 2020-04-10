import { Navigation } from 'react-native-navigation';

import Home from '../screens/Home/home.screen';
import Detail from '../screens/Detail';
import Explore from '../screens/Profile';
import Profile from '../screens/Profile';
import Notification from '../screens/Profile';

const RegisterScreens = () => {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Detail', () => Detail);
  Navigation.registerComponent('Explore', () => Explore);
  Navigation.registerComponent('Profile', () => Profile);
  Navigation.registerComponent('Notification', () => Notification);
};

export { RegisterScreens };
