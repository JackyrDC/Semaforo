const Way = (props) => {
    if(props.orientation='vert')
    return(
        <div className='verticalWayContainer'>
            <div  class='way'>
            </div>
        </div>
    )
    else if(props.orientation='hori')
    {
        return(
            <div className= 'horiWayContainer'>
                <div  class='way'>
                </div>
            </div>
        )
    }
}

export default Way