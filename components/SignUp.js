import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUp = ( { navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.signInText}>Sign up</Text>
      <View style={styles.part2}>
        <Text style={{ fontWeight: 'bolder', fontSize: 24, textAlign: 'left', color: '#2A27AF', alignSelf: 'flex-start', paddingHorizontal: 12,  }}>Welcome!</Text>
        <Text style={{ fontWeight: 'bold', marginBottom: 10, color: '#2A27AF', alignSelf: 'flex-start', paddingHorizontal: 12, }}>Hi there, Sign up to continue</Text>
        <Text style={styles.label}>Username or Email </Text>
        <View style={styles.formField}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/user.png')} style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="   Email"
          placeholderTextColor="#ccc"
        />
        </View>
        <Text style={styles.label}>Password </Text>
        <View style={styles.formField}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/lock.png')} style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="   Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
        </View>
        <Text style={styles.label}>Confirm Password </Text>
        <View style={styles.formField}>
        <View style={styles.iconContainer}>
          <Image source={require('../assets/lock.png')} style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="   Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={true}
        />
        </View>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.horizontalStroke}>
          <View style={styles.line} />
          <Text style={{ fontWeight: 'bold'}}>or sign in with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialIcons}>
          <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          <Image source={require('../assets/twitter.png')} style={styles.socialIcon} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signUpText}>Already have an account? <Text style={{ color: '#2A27AF' }}>Sign In</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#02006E',
    alignItems: 'center',
    paddingTop: 50,
  },
  part2: {
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    width: '100%',
    height: '80%',
    alignItems: 'center',
    marginBottom: 0,
    position: 'absolute',
    bottom: 0
  },
  signInText: {
    color: '#ffffff',
    marginTop: 124,
    marginBottom: 0,
    marginLeft: 10,
    paddingHorizontal: 20,
    textAlign: 'left',
    fontWeight: 'bolder',
    fontSize: 24,
    alignSelf: 'flex-start',
  },
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'flex-start',
  },
  input: {
    width: '90%',
    padding: 10,
    marginTop: 0,
    borderBottomWidth: 4,
    borderColor: '#ccc',
    borderRadius: 10,
    fontWeight: 'bold'
  },
  label: {
    marginTop: 10,
    marginBottom: 0,
    paddingBottom: 0,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    color: '#2A27AF',
    alignSelf: 'flex-start',
  },
  iconContainer: {
    position: 'relative',
    marginRight: -15,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: '50%'
  },
  signInButton: {
    width: '40%',
    backgroundColor: '#2A27AF',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  signInButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 3,
    fontSize: 14,
    paddingHorizontal: 7,
   fontWeight: 'bold',
    color: '#2A27AF',
  },
  horizontalStroke: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#2A27AF',
  },
  socialIcons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  signUpText: {
    marginTop: 20,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
};

export default SignUp;
