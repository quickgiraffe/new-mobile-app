import React, { useState } from 'react';
import { IonCard, IonImg, IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonMenuButton, IonButton, IonIcon, IonDatetime, IonSelectOption, IonList, IonItem, IonLabel, IonSelect, IonPopover } from '@ionic/react';
import './About.scss';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import AboutPopover from '../components/AboutPopover';
import couch8 from '../images/couch8.png';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {

  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();
  const [location, setLocation] = useState<'New York' | 'Munich' | 'Florida' | 'Paris' | 'Madrid'>('New York');

  const selectOptions = {
    header: 'Select a Location'
  };

  const presentPopover = (e: any) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };
  
    return (
      <IonPage id="about-page">
        <IonContent>
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonButton onClick={presentPopover}>
                  <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonImg src={couch8} />

        <IonCard>
          <h3 className="ion-padding-top ion-padding-start">About Us</h3>

          <p className="ion-padding-start ion-padding-end">
            The home of beautifully designed sofas. Just for you.
          </p>
          <p className="ion-padding-start ion-padding-end">
            Use our planner to help you decide what tyoe of sofa you would like.
          </p>

          <h3 className="ion-padding-top ion-padding-start">Details</h3>

          <IonList lines="none" class='padding-gap'>
            <IonItem>
              <IonLabel>
                Store Locations
              </IonLabel>
              <IonSelect value={location} interfaceOptions={selectOptions} onIonChange={(e) => setLocation(e.detail.value as any)}>
                <IonSelectOption value="New York">New York, US</IonSelectOption>
                <IonSelectOption value="Munich">Munich, Germany</IonSelectOption>
                <IonSelectOption value="Florida">Florida, US</IonSelectOption>
                <IonSelectOption value="Paris">Paris, France</IonSelectOption>
                <IonSelectOption value="Madrid">Madrid, Spain</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

        </IonCard>
      </IonContent>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(About);
