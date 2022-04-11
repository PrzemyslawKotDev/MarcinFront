
class Question extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='container'>
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
                        <button className='answerButton'>
                            <div className='letter'>C</div>
                            <span className='answer' id='answerC'>Odpowiedź C</span>
                        </button>
                        <button className='answerButton'>
                            <div className='letter'>D</div>
                            <span className='answer' id='answerD'>Odpowiedź D</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
