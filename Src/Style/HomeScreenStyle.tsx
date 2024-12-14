import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Utils/scaleFunctions';

const HomeScreenStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  headerContainer: {
    paddingVertical: verticalScale(12),
    marginHorizontal: horizontalScale(12),
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
    marginHorizontal: horizontalScale(20),
  },
  imageContainer: {
    marginTop: verticalScale(5),
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  NameTxt: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 700,
    color: 'white',
    fontSize: moderateScale(20),
  },
  disabledTxt: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    color: '#CA8504',
    fontSize: moderateScale(12),
    padding: 1,
    backgroundColor: '#FEF7C3',
    alignSelf: 'center',
    paddingHorizontal: horizontalScale(10),
    borderRadius: moderateScale(5),
    marginHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(2),
  },
  anylizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 6,
  },
  txtComman: {
    color: 'white',
  },
  txtStep: {
    color: '#6938EF',
    backgroundColor: 'white',
    paddingVertical: 1,
    paddingHorizontal: horizontalScale(10),
    borderRadius: 3,
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
  },
  platFomrContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(5),
    marginTop: verticalScale(10),
  },
  objectiveContainer: {
    flexDirection: 'column',
    backgroundColor: '#BFE1D8',
    paddingVertical: verticalScale(14),
    borderRadius: moderateScale(10),
    marginTop: verticalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  overViewContainer: {
    backgroundColor: '#181818',
    padding: 10,
    borderRadius: 15,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(20),
  },
  MinTxt: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: 'inter',
    fontWeight: 700,
  },
  progressBarContainer: {
    backgroundColor: '#1c1b1b',
    paddingVertical: 10,
    marginTop: verticalScale(28),
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  gradientBackground: {
    borderRadius: 5,
    overflow: 'hidden',
    width: '80%',
    height: 20,
  },
  progressBar: {
    height: '100%',
    width: '100%',
  },
});

export default HomeScreenStyle;
