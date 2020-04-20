import React, { useState } from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  isPlatform,
  IonButtons,
  IonIcon,
  IonFabButton,
  IonFab
} from '@ionic/react';
// import { useHistory } from 'react-router-dom';
import { addOutline } from 'ionicons/icons';

import AddSofaModal from '../components/AddSofaModal';
import SofaItem from '../components/SofaItem';

import couch2 from '../images/couch2.png'
import couch3 from '../images/couch3.png'
import couch4 from '../images/couch4.png'
import couch5 from '../images/couch5.png'

export const SOFA_DATA = [
  {
    id: 'c1',
    title: 'Blue Sky',
    enrolled: new Date('04/03/2020'),
    goals: [
      { id: 'c1g1', text: 'Lovely design' },
      { id: 'c1g2', text: 'Brand new addition' }
    ],
    desc: 'Beautiful sofa collection just for you',
    img: couch2
  },
  {
    id: 'c2',
    title: 'Breeze Finish',
    enrolled: new Date('03/03/2020'),
    goals: [
      { id: 'c2g1', text: 'Beautifully designed' },
      { id: 'c2g2', text: 'Perfect for the home' }
    ],
    desc: 'Lovely sofa collection just for you',
    img: couch3
  },
  {
    id: 'c3',
    title: 'Comfy Next Style',
    enrolled: new Date('02/03/2020'),
    goals: [
      { id: 'c3g1', text: 'Light and flexible design' },
      { id: 'c3g2', text: 'Great for the living room' }
    ],
    desc: 'Sweet sofa collection just for you',
    img: couch4
  },
  {
    id: 'c4',
    title: 'Matte Look',
    enrolled: new Date('01/03/2020'),
    goals: [
      { id: 'c4g1', text: 'Maximum space suitable' },
      { id: 'c4g2', text: 'Nice for a quiet evening' }
    ],
    desc: 'Incredible sofa collection just for you',
    img: couch5
  }
];

const Sofas: React.FC = () => {

  const [isAdding, setIsAdding] = useState(false);

  const startAddSofaHandler = () => {
    setIsAdding(true);
  };

  const cancelAddSofaHandler = () => {
    setIsAdding(false);
  };

  return (
    <React.Fragment>
      <AddSofaModal show={isAdding} onCancel={cancelAddSofaHandler} />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sofas</IonTitle>
            {!isPlatform('android') && (
              <IonButtons slot="end">
                <IonButton onClick={startAddSofaHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {SOFA_DATA.map(sofa => (
              <IonRow key={sofa.id}>
                <IonCol size-md="4" offset-md="4">
                  <SofaItem
                    title={sofa.title}
                    id={sofa.id}
                    enrolmentDate={sofa.enrolled}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform('android') && (
            <IonFab horizontal="end" vertical="bottom">
              <IonFabButton color="secondary" onClick={startAddSofaHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Sofas;