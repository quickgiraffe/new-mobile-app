import React, { useState, useRef } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonImg,
  IonPage,
  IonButtons,
  IonBackButton,
  IonToast
} from '@ionic/react';
import { useParams } from 'react-router-dom';

import { SOFA_DATA } from './Sofas';


const SofaGoals: React.FC = () => {
  const [toastMessage, setToastMessage] = useState('');

  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

  const selectedSofaId = useParams<{ sofaId: string }>().sofaId;

  const selectedSofa = SOFA_DATA.find(c => c.id === selectedSofaId);

  return (
    <React.Fragment>
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => {
          setToastMessage('');
        }}
      />
      <IonPage>
        <IonCard>
          <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/sofas/list" />
            </IonButtons>
            <IonImg src={selectedSofa ? selectedSofa.img : 'No sofa found!'} />
            <IonCardHeader>
              {selectedSofa ? selectedSofa.title : 'No sofa found!'}
            </IonCardHeader>
            <IonCardHeader>
              {selectedSofa ? selectedSofa.desc : 'No sofa found!'}
            </IonCardHeader>
          </IonToolbar>
        </IonHeader>
        </IonCard>
        
      </IonPage>
    </React.Fragment>
  );
};

export default SofaGoals;