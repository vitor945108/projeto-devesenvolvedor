import Logo from '../../imagens/logo.png';
import './head.css';
function Head ({titulo}){
return(
          <div className='sobre'>
                     <img src={Logo} alt="LOGO" />
                     <h1>{titulo}</h1>
                    </div>
)

}

export default Head
