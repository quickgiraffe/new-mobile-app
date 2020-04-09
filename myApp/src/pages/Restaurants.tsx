import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { MainContainer } from '../components/MainContainer';
import './Restaurants.css';

export const Restaurants: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Restaurants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Restaurants</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MainContainer name="Restaurants Page" />
      </IonContent>
    </IonPage>
  );
};

