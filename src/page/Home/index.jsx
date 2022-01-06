import Formulaire from '../../component/Formulaire';
import { fillEmployeeArray } from '../../script/fillEmployeeArray';
import './style.css';
function Home() {
    function handleButton() {
        fillEmployeeArray();
    }
    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <Formulaire />
            <input
                type="button"
                onClick={handleButton}
                value="Fill the array"
            />
        </>
    );
}

export default Home;
