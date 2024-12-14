import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Utils/scaleFunctions';
import HomeScreenStyle from '../Style/HomeScreenStyle';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  const handleDrawer = () => {
    console.log('handleDrawer');
  };
  return (
    <SafeAreaView style={HomeScreenStyle.container}>
      <ScrollView>
        <View style={HomeScreenStyle.headerContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={handleDrawer}>
                <Image source={require('../Assets/JPG/MenuBar.png')} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                gap: 8,
              }}>
              <TouchableOpacity>
                <Image source={require('../Assets/JPG/Search.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Assets/JPG/Notification.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={HomeScreenStyle.mainContainer}>
          <View style={HomeScreenStyle.imageContainer}>
            <Image source={require('../Assets/JPG/ProfileImage.png')} />
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={HomeScreenStyle.NameTxt}>MT5 1012963</Text>
                <TouchableOpacity>
                  <Text style={HomeScreenStyle.disabledTxt}>* Disabled</Text>
                </TouchableOpacity>
              </View>
              <Text style={{color: 'white', fontSize: moderateScale(14)}}>
                Create at: August 2, 2024
              </Text>
            </View>
          </View>
          <View style={HomeScreenStyle.anylizeContainer}>
            <TouchableOpacity
              style={{
                width: horizontalScale(161),
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                paddingVertical: verticalScale(5),
                marginVertical: verticalScale(10),
                flexDirection: 'row',
                borderRadius: 10,
                gap: 5,
                borderColor: 'white',
              }}>
              <Image source={require('../Assets/JPG/barchart.png')} />
              <Text style={{color: 'white'}}>Analysis</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: horizontalScale(161),
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                paddingVertical: verticalScale(5),
                marginVertical: verticalScale(10),
                flexDirection: 'row',
                borderRadius: 10,
                gap: 5,
                borderColor: 'white',
              }}>
              <Image source={require('../Assets/JPG/passcode.png')} />
              <Text style={{color: 'black'}}>Credentials</Text>
            </TouchableOpacity>
          </View>
          <View style={HomeScreenStyle.overViewContainer}>
            <Text style={{color: 'white', fontSize: moderateScale(20)}}>
              Overview
            </Text>
            <View>
              <View style={HomeScreenStyle.platFomrContainer}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={require('../Assets/JPG/platform.png')} />
                  <Text style={HomeScreenStyle.txtComman}>Platform</Text>
                </View>
                <Text style={HomeScreenStyle.txtStep}>METATRADER 5</Text>
              </View>
              <View style={HomeScreenStyle.platFomrContainer}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={require('../Assets/JPG/Account.png')} />
                  <Text style={HomeScreenStyle.txtComman}>Account Type</Text>
                </View>
                <Text style={HomeScreenStyle.txtStep}>1 STEP</Text>
              </View>
              <View style={HomeScreenStyle.platFomrContainer}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={require('../Assets/JPG/linechartup.png')} />
                  <Text style={HomeScreenStyle.txtComman}>Phase</Text>
                </View>
                <Text
                  style={[
                    HomeScreenStyle.txtStep,
                    {
                      color: 'white',
                      backgroundColor: '#181818',
                      fontWeight: 500,
                      fontFamily: '"Inter", sans-serif',
                    },
                  ]}>
                  Student
                </Text>
              </View>
              <View style={HomeScreenStyle.platFomrContainer}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={require('../Assets/JPG/wallet.png')} />
                  <Text style={HomeScreenStyle.txtComman}>Account Size</Text>
                </View>
                <Text
                  style={[
                    HomeScreenStyle.txtStep,
                    {
                      color: '#10FFE3',
                      fontSize: 20,
                      backgroundColor: '#181818',
                      fontWeight: 500,
                      fontFamily: '"Inter", sans-serif',
                    },
                  ]}>
                  $50,000.00
                </Text>
              </View>
              <View style={HomeScreenStyle.platFomrContainer}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Image source={require('../Assets/JPG/calendar.png')} />
                  <Text style={HomeScreenStyle.txtComman}>
                    Star Trade Period
                  </Text>
                </View>
                <Text
                  style={[
                    HomeScreenStyle.txtStep,
                    {
                      color: 'white',
                      backgroundColor: '#181818',
                      fontWeight: 500,
                      fontFamily: '"Inter", sans-serif',
                    },
                  ]}>
                  Jan 1, 2024
                </Text>
              </View>
              <View style={HomeScreenStyle.objectiveContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: horizontalScale(5),
                    marginBottom: verticalScale(4),
                  }}>
                  <Image
                    source={require('../Assets/JPG/currency-dollar-circle.png')}
                  />
                  <Text
                    style={[
                      HomeScreenStyle.txtComman,
                      {
                        color: '#2F534A',
                        fontWeight: 700,
                        fontFamily: 'Inter',
                        fontSize: 17,
                      },
                    ]}>
                    Trading objectives
                  </Text>
                </View>
                <Text
                  style={[
                    HomeScreenStyle.txtStep,
                    {
                      color: '#3C695E',
                      fontWeight: 500,
                      fontFamily: '"Inter", sans-serif',
                      backgroundColor: '#BFE1D8',
                    },
                  ]}>
                  Please note: Hitting either the daily loss limit or the
                  maximum loss limit will result in a permanent account breach.
                </Text>
              </View>
            </View>
            <View style={HomeScreenStyle.progressBarContainer}>
              <Text style={HomeScreenStyle.MinTxt}>Min Trading Days</Text>
              <View style={HomeScreenStyle.platFomrContainer}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Text style={HomeScreenStyle.txtComman}>3 Day(s) Left</Text>
                </View>
                <Text
                  style={[
                    HomeScreenStyle.txtStep,
                    {
                      color: 'white',
                      backgroundColor: '#1c1b1b',
                      fontWeight: 500,
                      fontFamily: '"Inter", sans-serif',
                      paddingHorizontal: 0,
                    },
                  ]}>
                  45.00%
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}></View>
              <View style={{paddingVertical: verticalScale(10)}}>
                <ProgressBar
                style={{
                  height: verticalScale(10),
                  borderRadius: 10,
                  marginHorizontal: horizontalScale(5),
                }}
                progress={0.4}
                color={'#337388'}
              />
                {/* <LinearGradient
                  colors={['#337388', '#33B17B']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={HomeScreenStyle.gradientBackground}>
                  <ProgressBar
                    progress={0.4}
                    color="transparent"
                    style={HomeScreenStyle.progressBar}
                  />
                </LinearGradient> */}
              </View>
              <View style={[HomeScreenStyle.platFomrContainer, {marginTop: 0}]}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  <Text style={HomeScreenStyle.txtComman}>
                    Minimum trading days
                  </Text>
                </View>
                <Text
                  style={[
                    HomeScreenStyle.txtStep,
                    {
                      color: 'white',
                      backgroundColor: '#1c1b1b',
                      fontWeight: 500,
                      fontFamily: '"Inter", sans-serif',
                    },
                  ]}>
                  05
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
