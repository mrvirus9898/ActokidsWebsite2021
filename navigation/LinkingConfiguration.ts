import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          ProgramList: {
            screens: {
              ProgramList: 'Program List',
            },
          },
          ActivityList: {
            screens: {
              ProgramList: 'Activity List',
            },
          },
          Map: {
            screens: {
              Map: 'Map',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
