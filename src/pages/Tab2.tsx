import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Tab2.css';
import Chart from '../components/chart/chart';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Growth</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Growth</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Chart />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
