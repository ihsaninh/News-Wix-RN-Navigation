import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home/home.screen';
import Detail from '../screens/Detail';
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Detail', () => Detail);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
