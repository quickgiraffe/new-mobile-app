import React from "react";
import {
  IonTitle,
  IonToolbar,
  IonHeader,
  IonIcon,
  IonButton,
  IonContent,
  IonPage,
  IonImg
} from '@ionic/react';
import { musicalNotes } from 'ionicons/icons';
import couch7 from '../images/couch7.png';

export default function LandingPage(props: any) {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Sweet Sofa </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center" fullscreen={true}>
        <IonImg src={couch7} />
        <h3>
          Welcome to Sweet Sofa
        </h3>
        <p>Discover your most beautful sofa in seconds</p>
        <IonButton
          onClick={e => {
            e.preventDefault();
            props.history.push('/sofas/list');
          }}
        >
          Our Collection
        </IonButton>
      </IonContent>
        </IonPage>
  );
}