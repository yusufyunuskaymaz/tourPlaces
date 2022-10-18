import "./Main.scss"
import {data} from "../../helper/data.js"
import Card from "./Card"


const Main = () => {
    // console.log(data)
    return (
        <div className="card-container">
            {data.map((item,index) => {
                return (
                    <Card {...item} key={index} />
                )
            })}
        </div>
    )
}

export default Main;