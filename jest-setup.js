require("@testing-library/jest-native/extend-expect");

require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
require("react-native-gesture-handler/jestSetup");

global.__reanimatedWorkletInit = () => {}
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'))
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');