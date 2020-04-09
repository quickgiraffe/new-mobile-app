import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { MainContainer } from '../components/MainContainer';
import './Intro.css';

export const Intro: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Introduction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Introduction</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MainContainer name="Introduction Page" />
      </IonContent>
    </IonPage>
  );
};

