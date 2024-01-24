import './texto.css';

function Texto({para,titulo}){
          return(<div div className="texto">
                    <h2>{titulo}</h2>
                    <p>{para}</p>
                    </div>
          )
}
export default Texto;