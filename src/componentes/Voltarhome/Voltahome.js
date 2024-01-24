import { useNavigate } from "react-router-dom"
import './voltahome.css'
function Voltarhome(){
          const navigate =useNavigate();
          const handlehome = () =>{
                    return navigate("/");
          }

          return(
           <div className="button">
          <button onClick={handlehome}>home</button>
           </div>
          )
}
export default Voltarhome;