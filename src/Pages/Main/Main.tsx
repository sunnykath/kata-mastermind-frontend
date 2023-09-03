import Accordion from '../../Components/Accordion/Accordion';
import StartButton from '../../Components/StartButton/StartButton';
import './Main.css'

export default function Main(props: any) {

    const { onStartGame } = props;
    const rules = (
        <ol>
            <li>The Mastermind (computer) will select 4 colours.</li>
            <li>The colours are randomly selected from [Red, Blue, Orange, Purple, Yellow]</li>
            <li>Colours can be duplicated but there will always be exactly 4.</li>
            <li>You take turns to guess what the 4 colours are.</li>
            <li>The Mastermind will return an array back to you with clues.</li>
            <li>For every correctly positioned colour in the array an element of “Black” is returned.</li>
            <li>For every correct colour but in the wrong position an element of “White” will be returned.</li>
            <li>However, the return array will be shuffled!</li>
        </ol>);

    const win_conditions = (
        <ul>
            <li>Passing the correct array will win you the game!</li>
            <li>Guessing more than 60 times will result in a loss.</li>
        </ul>
    );

    return (
        <div className="main">
            <header className="main-header">
                <h1>Mastermind</h1>
            </header>
            <div className="main-description">
                Mastermind or Master Mind is a code-breaking game for two players. The modern game with pegs was invented in
                by Mordecai Meirowitz, an Israeli postmaster and telecommunications expert. It resembles an earlier
                pencil and paper game called Bulls and Cows that may date back a century or more. (Source Wikipedia)
            </div>
            <Accordion title={'Rules'} content={rules} />
            <Accordion title={'How to win'} content={win_conditions} />

            <StartButton onClick={onStartGame} />

        </div>
    )
}