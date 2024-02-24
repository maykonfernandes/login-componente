import { View, Text, Image} from 'react-native';
import { styles } from '../styles/stylesheets';
const img = { uri: 'https://cdn.meutimao.com.br/_upload/noticia/2021/12/12/ronaldo-fenomeno-vai-ter-busto-no-corinthians-em-wd941w.jpg'};


export default function LoginImage(){
    return (
        <View>
            <Image
  style={styles.img}
  source={img}
/>

        </View>
    )
}