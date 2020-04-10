import { Navigation } from 'react-native-navigation';

export const setRoot = (res) => {
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
};
