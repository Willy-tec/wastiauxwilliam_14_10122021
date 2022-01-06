import './style.css';
function Modale({ children, visible, SetState }) {
    function handleModalClick() {
        SetState(!visible);
    }
    return visible ? (
        <div className="Modale" onClick={handleModalClick}>
            <div className="Modale_content">{children}</div>
        </div>
    ) : null;
}

export default Modale;
