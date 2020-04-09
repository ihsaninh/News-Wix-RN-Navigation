import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../screens/Home/home.screen';
import Detail from '../screens/Detail';
import Explore from '../screens/Profile';
import Profile from '../screens/Profile';
import Notification from '../screens/Profile';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Detail', () => Detail);
Navigation.registerComponent('Explore', () => Explore);
Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Notification', () => Notification);

Navigation.events().registerAppLaunchedListener(async () => {
  Promise.all([
    Icon.getImageSource('home', 24),
    Icon.getImageSource('grid', 24),
    Icon.getImageSource('bell', 24),
    Icon.getImageSource('user', 24),
  ]).then((res) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BOTTOM_TABS_LAYOUT',
          children: [
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'HOME_SCREEN',
                      name: 'Home',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: res[0],
                    text: 'Home',
                  },
                },
              },
            },
            {
              stack: {
                id: 'EXPLORE_TAB',
                children: [
                  {
                    component: {
                      id: 'EXPLORE_SCREEN',
                      name: 'Explore',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: res[1],
                    text: 'Explore',
                  },
                },
              },
            },
            {
              stack: {
                id: 'NOTIFICATION_TAB',
                children: [
                  {
                    component: {
                      id: 'NOTIFICATION_SCREEN',
                      name: 'Notification',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: res[2],
                    text: 'Notification',
                  },
                },
              },
            },
            {
              stack: {
                id: 'PROFILE_TAB',
                children: [
                  {
                    component: {
                      id: 'PROFILE_SCREEN',
                      name: 'Profile',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    icon: res[3],
                    text: 'Profile',
                  },
                },
              },
            },
          ],
          options: {
            bottomTabs: {
              animate: false,
              tabsAttachMode: 'onSwitchToTab',
              titleDisplayMode: 'alwaysShow',
            },
          },
        },
      },
    });
    Navigation.setDefaultOptions({
      bottomTab: {
        selectedTextColor: 'red',
        selectedIconColor: 'red',
      },
      statusBar: {
        backgroundColor: 'white',
        style: 'dark',
      },
    });
  });
});
