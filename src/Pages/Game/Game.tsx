import { type } from "os";
import ColorCell from "../../Components/ColorCell/ColorCell";

import './Game.css'
import ColorRow from "../../Components/ColorRow/ColorRow";

export default function Game(props: any) {
    const { game } = props;

    // const colours = {
    //     Red,
    //     Blue,
    //     Green,
    //     Orange,
    //     Purple,
    //     Yellow
    // }


    return (
        // <div> {game.id} </div>

        <div className="colors">
            Available Colours
            <ColorRow colors={['red', 'blue', 'green', 'orange']} size={6} />
            {/* <div className="row">
                <ColorCell color='red' />
                <ColorCell color='blue' />
                <ColorCell color='green' />
                <ColorCell color='orange' />
                <ColorCell color='purple' />
                <ColorCell color='yellow' />
                {/* <ColorCell color="yellow" mutable={true} />
                <ColorCell mutable={true} /> */}
            {/* </div> * /} */}
        </div >

        // <div className="grid">
        //     <div className="row">
        //         <div className="cell">red</div>
        //         <div className="cell">green</div>
        //         <div className="cell">yello</div>
        //         <div className="cell">blue</div>
        //         <div className="cell">orange</div>
        //     </div>
        // </div>

    )
}