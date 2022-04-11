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
