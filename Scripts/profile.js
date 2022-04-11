class Profile extends React.Component {
    constructor(props){
        super(props);
    }
render(){
    return(
        <div id='container'>
            <div id='basicInfo'>
                <div id='avatar'>avatar</div>
                <div id='identification'>
                    <div className='infoBar' id='nick'>Nickname: USER</div>
                    <div className='infoBar' id='nameSurname'>Name: NAME SURNAME</div>
                    <div className='infoBar' id='location'>Location: WORLD</div>
                </div>
            </div>
            <div id='gameInfo'>
                <div className='infoBar' id='gameCounter'>You have played XXX games.</div>
                <div className='infoBar' id='highScore'>Your highest score is XXXXX</div>
                <div className='infoBar' id='avarageScore'>Your average score is XXXXX</div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
}