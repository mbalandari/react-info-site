import './project1.css'
import pic1 from '../images/project1.jpg'

export default function Project1() {
    return (
        <div>
            <img src={pic1} alt="logo" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>1. different items</li>
                <li>2. different items</li>
                <li>3. different items</li>
                <li>4. different items</li>
                <li>5. different items</li>
            </ul>
        </div>
    )
}
