import Button from "../button/button"


function Card() {
    return <div className="card">
        <div className="card-img">
            <img src="../assets/emrakul.webp" alt="" />
        </div>
        <h3 className="card-title">Emrakul</h3>
        <p className="card-description">Lorem ipsum dolor sit amet.</p>
        <Button />
    </div>
}

export default Card