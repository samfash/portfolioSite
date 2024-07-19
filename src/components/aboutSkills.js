export default function AboutSkills(props){
    return(
        <div className="skill-category">
            <h4>{props.head}</h4>
            <ul>
            <li>{props.body1}</li>
            <li>{props.body2}</li>
            <li>{props.body3}</li>
            </ul>
        </div>
    )
}