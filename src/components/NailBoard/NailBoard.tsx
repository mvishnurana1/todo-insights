import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    IonItem,
    IonList
} from "@ionic/react";
import './NailBoard.scss';
import { ChangeEvent, useState } from "react";

const NailBoard: React.FC = () => {
    const [inputValue, setInputValue] = useState<string | null>(null);
    const [tasks, setTasks] = useState<string[]>([]);

      // Event handler to update the state when the input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!event.target.value) return;

    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log('Submitted value:', inputValue);

    if (!inputValue) return;
    setTasks([inputValue, ...tasks]);
    setInputValue('');
  };

  function getDate(): string {
    const date = new Date();
    return date.toDateString();
  }


    return <div className="nail-board-container">
        <h2>Nail Board</h2>
        <form onSubmit={handleSubmit}>
            <IonList>
                <IonItem>
                    <IonInput label="what to nail" onIonChange={ handleInputChange } />
                </IonItem>

                <IonButton
                    style={{ marginTop: '1rem' }}
                    expand="block"
                    type="submit">
                    <span>Add</span>
                </IonButton>
            </IonList>
        </form>

        <div>
            {tasks.map((x, index) =>
            <div style={{ display: "flex" }}>
                <IonCard color="primary" key={index}>
                    <IonCardHeader>
                        <IonCardTitle>{x}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>{ getDate() }</IonCardContent>
                </IonCard>
            </div>
            )}
        </div>
    </div>
}

export default NailBoard;
