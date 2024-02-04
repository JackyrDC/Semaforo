import Way from './ways'

const Road = (props) =>{

    const n_Ways = props.ways
    return(
            <Way orientation={props.orientation}/>
    )
}

export default Road