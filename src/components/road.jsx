import Way from 'Ways'

const Road = (props) =>{

    const n_Ways = props.ways
    return(
        <div>
            <Way orientation={props.orientation}/>
        </div>
    )
}

export default Road