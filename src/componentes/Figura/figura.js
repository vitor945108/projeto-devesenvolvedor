import Logo from '../../imagens/logo.png';
import './figura.css';

function Figura({img,titulo}){
    return(
        <>
    <div className='figura'>
          <h2>{titulo}</h2>
           <img src={img} alt="LOGO" />
                    </div>
                    </>                
          )
          
          }
export default Figura;