import './StartButton.css'

export default function StartButton(props: any) {

    const { onClick } = props;

    return (
        <button onClick={onClick}>Start</button>
    );

}