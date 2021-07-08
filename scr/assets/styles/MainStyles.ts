import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(239,235,235)',
  },
  container: {height: '90%', backgroundColor: 'rgb(239,235,235)'},
  child: {width, justifyContent: 'center', padding: 30},
  headText: {fontSize: 27, textAlign: 'center', fontWeight: 'bold'},
  footerText: {fontSize: 19, textAlign: 'center'},
  logo: {
    width: 50,
    height: 50,
    margin: 20,
    alignSelf: 'center',
    top: 50,
  },
  imageStyle: {width: '100%', height: '50%'},
  buttonContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  nexContainerButton: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    bottom: 10,
  },
  customBtnBackText: {fontWeight: 'bold'},
  customBtnBGText: {color: 'black', fontWeight: 'bold', fontSize: 17},
  customBtnBG: {
    height: 50,
    width: width / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    marginBottom: 20,
  },
  customBtnBack: {
    width: 80,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    marginBottom: 20,
  },
  customBtnNext: {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    marginBottom: 20,
  },
  customBtnNextText: {fontSize: 17, textDecorationLine: 'underline'},
});

export default styles;
