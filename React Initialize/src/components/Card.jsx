import img from "../assets/1.jpeg"

function Card(Props) {
    return (

        <div className="card-box">
            <div className="card-img">
                <img src={Props.image} alt="" />
            </div>
            <div className="card-content">
                <h2> {Props.title} </h2>
                <p> {Props.description}</p>
                <div className="btnns">
                    <button> Read More </button>
                </div>
            </div>
        </div>

    )
}

export default Card