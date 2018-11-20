import LinearGradient  from 'react-native-linear-gradient';
<LinearGradient
          colors={['transparent', 'transparent', 'transparent', '#4C64FF', '#6536FF', '#8000FF']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center', width: 200 }}
        >
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              LOGIN
        </Text>
          </TouchableOpacity>
        </LinearGradient>