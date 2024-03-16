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
        <Chart
          dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
          timeFrame='month so far' />

        <Chart
          dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21,
            122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21,
            122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21,
            122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21,
            122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21,
            122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21,
            122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
          timeFrame='this year' />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
