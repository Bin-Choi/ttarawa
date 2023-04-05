import { Modal, Text, Image, View } from 'react-native'
import { color } from '@styles/GlobalStyles'
const ReturnModal = ({ modalVisible, handleSetTime, cancleTime }) => {
  const handlePress = (time: number) => {
    handleSetTime(time)
  }
  const cancleTimer = () => {
    cancleTime()
  }
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <View style={[styles.contentContainer, styles.shadow]}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('@assets/ttarawa/logo.png')}
          />
          <Text style={styles.title}>반납하시겠습니까?</Text>
        </View>

        <View style={[styles.buttonContainer, styles.shadow]}>
          <Text style={styles.cancel} onPress={() => cancleTimer()}>
            취소
          </Text>
          <Text style={styles.confirm} onPress={() => handlePress(0)}>
            확인
          </Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = {
  modalContainer: {
    flex: 1,
    backgroundColor: color.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'flex-end',
    margin: 10,
    width: 100,
    height: 50,
  },
  contentContainer: {
    height: '30%',
    width: '90%',
    backgroundColor: color.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonContainer: {
    height: '8%',
    width: '90%',
    backgroundColor: color.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },

  cancel: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: color.secondary,
    color: color.gray,
    borderBottomLeftRadius: 10,
    lineHeight: 60,
  },
  confirm: {
    flex: 1,
    backgroundColor: color.primary,
    fontSize: 30,
    textAlign: 'center',
    color: color.white,
    borderBottomRightRadius: 10,
    lineHeight: 60,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
}

export default ReturnModal
