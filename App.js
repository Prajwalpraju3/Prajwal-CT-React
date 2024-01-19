/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useCallback} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {requestNotifications} from 'react-native-permissions';
import CleverTap, { onUserLogin } from 'clevertap-react-native';
import DefaultPreference from 'react-native-default-preference';

const App = () => {
  useEffect(() => {

    CleverTap.onUserLogin({
      Name: 'Prajwal',
      Email: 'prajwalreact@gmail.com',
    });



    // const request = async () => {
    //   try {
    //     await requestNotifications();
    //   } catch (err) {
    //     console.log('+++ ERR +++', err);
    //   }
    // };

    // CleverTap.registerForPush();

    // CleverTap.createNotificationChannel(
    //   'Custom_Channel',
    //   'Clever Tap React Native Testing',
    //   'CT React Native Testing',
    //   5,
    //   true,
    // );

    // setTimeout(() => {
    //   request();
    // }, 500);
    const appGroupIdentifier = "group.com.ct-push"

    console.log('appGroupIdentifier==>', appGroupIdentifier);

    CleverTap.getCleverTapID((err, res) => {
      console.log('CleverTapID', res, err);
    });


    // await saveUserDataToSharedStorage("temp@gmail.com");

  }, []);


  const sendEvent = useCallback(() => {
    CleverTap.recordEvent('Product_Viewed', {
      'Product ID': 1,
      'Product Image':
        'https://d35fo82fjcw0y8.cloudfront.net/2018/07/26020307/customer-success-clevertap.jpg ',
      'Product Name': 'CleverTap',
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Send Event"  onPress={sendEvent}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;