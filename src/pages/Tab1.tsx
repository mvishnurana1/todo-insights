import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Tab1.scss';
import NailBoard from '../components/NailBoard/NailBoard';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nail Board</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <NailBoard />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
