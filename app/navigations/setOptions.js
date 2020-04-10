import { Navigation } from 'react-native-navigation';

export const setOptions = () => {
  Navigation.setDefaultOptions({
    bottomTab: {
      selectedTextColor: 'red',
      selectedIconColor: 'red',
    },
    statusBar: {
      backgroundColor: 'white',
      style: 'dark',
    },
    animations: {
      push: {
        waitForRender: true,
        content: {
          translationX: {
            from: require('react-native').Dimensions.get('window').width,
            to: 0,
            duration: 300,
          },
          alpha: {
            from: 0.7,
            to: 1,
            duration: 300,
          },
        },
      },
      pop: {
        content: {
          translationX: {
            from: 0,
            to: require('react-native').Dimensions.get('window').width,
            duration: 300,
          },
          alpha: {
            from: 1,
            to: 0.3,
            duration: 300,
          },
        },
      },
    },
  });
};
