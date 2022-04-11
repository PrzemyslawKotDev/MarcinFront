export default class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
render(){
    return(
        <>
        <div id="navBar">
            <img src="" alt="LOGO"/>
            <div id="buttons">
                <button className='navButton'>Profile</button>
                <button className='navButton'>Leaderboard</button>
                <button className='navButton'>Start</button>
            </div>
        </div>
        </>
    )
}
}
