import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { arrowRedoOutline, arrowRedoSharp, chevronForwardOutline, chevronForwardSharp, mail, helpOutline, pencilOutline, pencilSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, helpSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'About',
    url: '/page/about',
    iosIcon: helpOutline,
    mdIcon: helpSharp
  },
  {
    title: 'Sofas',
    url: '/sofas/list',
    iosIcon: chevronForwardOutline,
    mdIcon: chevronForwardSharp
  },
  {
    title: 'Planner',
    url: '/planner',
    iosIcon: pencilOutline,
    mdIcon: pencilSharp
  },
  {
    title: 'Support',
    url: '/support',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Reviews',
    url: '/page/reviews',
    iosIcon: arrowRedoOutline,
    mdIcon: arrowRedoSharp
  }
];

const labels = ['Excellence', 'Professionalism', 'Design', 'Furnitures'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Sweet Sofas</IonListHeader>
          <IonNote>Your Beautiful Sofas</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Who We Are</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
