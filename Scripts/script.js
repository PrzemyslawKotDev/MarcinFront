class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            select: <Start />
        }
    }
    updateContent = (info) => {
        this.setState({select: info});
  }
render(){
    return(
        <>
        <div>
            <Navbar parentCallback = {this.updateContent}/>
            {this.state.select}
        </div>
        </>
    )
}
}


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.sendProfile = this.sendProfile.bind(this);
        this.sendLeaderboard = this.sendLeaderboard.bind(this);
        this.sendStart = this.sendStart.bind(this);
    }
    sendProfile = () => {
        this.props.parentCallback(<Profile />);
    }    
    sendLeaderboard = () => {
        this.props.parentCallback(<Leaderboard />);
    }    
    sendStart = () => {
        this.props.parentCallback(<Start />);
    }    
    
render(){
    return(
        <>
        <div id='navBar'>
            <img src="" alt='LOGO'/>
            <div id="buttons">
                <button className='navButton' onClick={this.sendProfile}>Profile</button>
                <button className='navButton' onClick={this.sendLeaderboard}>Leaderboard</button>
                <button className='navButton' onClick={this.sendStart}>Start</button>
            </div>
        </div>
        </>
    )
}
}

class Game extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='container'>
                <div id='questionBoard'>
                    <div id='question1' class='questionBar'>500</div>
                    <div id='question2' class='questionBar'>1000</div>
                    <div id='question3' class='questionBar'>2000</div>
                    <div id='question4' class='questionBar'>5000</div>
                    <div id='question5' class='questionBar'>10 000</div>
                    <div id='question6' class='questionBar'>20 000</div>
                    <div id='question7' class='questionBar'>40 000</div>
                    <div id='question8' class='questionBar'>75 000</div>
                    <div id='question9' class='questionBar'>125 000</div>
                    <div id='question10' class='questionBar'>250 000</div>
                    <div id='question11' class='questionBar'>500 000</div>
                    <div id='question12' class='questionBar'>1 000 000</div>
                </div>
                <div id='questionContainer'>
                    <div id='questionTitle'>Tutaj będzie pytanie?</div>
                    <div id='answerContainer'>
                        <button className='answerButton'>
                            <div className='letter'>A</div>
                            <span className='answer' id='answerA'>Odpowiedź A</span>
                        </button>
                        <button className='answerButton'>
                            <div className='letter'>B</div>
                            <span className='answer' id='answerB'>Odpowiedź B</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

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

class Start extends React.Component {
    constructor(props){
        super(props);
    }
render(){
    return(
        <div id='container'>
            <div id='gameTypes'>
                <div id='easyGame'>
                    <p>EASY</p>
                    <p>Time for answer: 1:00</p>
                    <p>1/4 Award</p>
                </div>
                <div id='mediumGame'>
                    <p>MEDIUM</p>
                    <p>Time for answer: 0:40</p>
                    <p>1/2 Award</p>
                </div>
                <div id='hardGame'>
                    <p>HARD</p>
                    <p>Time for answer: 0:20</p>
                    <p>Full Award</p>
                </div>
            </div>
        </div>
    )
}
}

class Leaderboard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='container'>
                <div id='leaderboard'>
                    <div id='bestFirst' className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                    <div className='bestBar'><p>NICK</p><p className='right'>WYNIK</p></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"))