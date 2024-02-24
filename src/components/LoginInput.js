import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/stylesheets';

export default function LoginInput(){

    return (
        <View>
            
<TextInput 
style={styles.input}
  placeholder='e-mail'
/>

<TextInput
style={styles.input2}
  placeholder='Senha'
  secureTextEntry={true}
  

/>
        </View>
    )
}