
import Toast from 'react-bootstrap/Toast';
const Popup=(props)=>{
    
    return(
<Toast>
      <Toast.Body>{props.getMessage}</Toast.Body>
    </Toast>
    )
}
export default Popup;