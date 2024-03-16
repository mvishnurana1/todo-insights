import {
    IonButton,
    IonInput,
    IonItem,
    IonList
} from "@ionic/react";
import './NailBoard.scss';
import { useState } from "react";

const NailBoard: React.FC = () => {
    const [tasks, setTasks] = useState([]);

    function handleClick(e: any) {
        console.log(e);
    }

    return <div className="nail-board-container">
        <h2>Nail Board</h2>
        <IonList>
            <IonItem>
                <IonInput value="" label="what to nail"></IonInput>
            </IonItem>

            <IonButton
                expand="block"
                onClick={handleClick}>
                    <span>Add</span>
                </IonButton>
        </IonList>
    </div>
}

export default NailBoard;
