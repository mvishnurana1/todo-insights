import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Tab2.scss';
import Chart from '../components/chart/chart';
import ChartsContainer from '../components/chartsContainer/chartsContainer';


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Growth Pad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ChartsContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
