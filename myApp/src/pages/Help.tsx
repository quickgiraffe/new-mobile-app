import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { MainContainer } from '../components/MainContainer';
import './Help.css';

export const Help: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Help</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MainContainer name="Help Page" />
      </IonContent>
    </IonPage>
  );
};

