# Created with

Used the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup?guide=native&package-manager=npm)

>**React Native Version**: 0.72

# Start your Application
Let Metro Bundler run in its _own_ MAC OS terminal. Open a _new_ terminal from the _root_ of your React Native project.

## Run instructions for Android
- Use OSX terminal instead of VSCode terminal

### Start the emulator
- Check available emulators with `emulator -list-avds`
- Start AVD server: `adb start-server`
- Start target emulator like `emulator -avd Pixel_4_API_33`
- If emulator shows disconnected: `adb kill-server` after launch the emulator separately and re-enable fingerprints for USB debugging in local machine

### Start the app
- Don't use `npm start`
- Use `npx react-native run-android`
- Use `npx react-native run-android --list-devices` for device select before run

## Run instructions for iOS
- Use OSX terminal instead of VSCode terminal

### Start the emulator
- Open xCode
- Open simulator from yCode menu with "xCode > Open Developer Tool > Simulator"

### Start the app
- Don't use `npm start`
- Use `npx react-native run-ios`
- or open shake/ios/shake.xcworkspace in Xcode or run "xed -b ios" and hit the Run button
- Launch with cache clear: `npm start --reset-cache`
- Change simulator with `npx react-native run-ios --simulator="iPhone 15 Plus"` https://reactnative.dev/docs/running-on-simulator-ios

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Packages and Add-Ons

# Metamask
- [How to use MM inside from app?](https://docs.metamask.io/wallet/how-to/connect/set-up-sdk/javascript/react-native/) Setup guide

# Installations

`npm install @react-navigation/native`
`npm install react-native-screens react-native-safe-area-context`
`npm install @react-navigation/drawer`

