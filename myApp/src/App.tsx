import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse } from 'ionicons/icons';
import { Home } from './pages/Home';
import { Help } from './pages/Help';
import { About } from './pages/About';
import { Intro } from './pages/Intro';
import { Menu } from './pages/Menu';
import { Restaurants } from './pages/Restaurants';
import { Times } from './pages/Times';
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/help" component={Help} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/intro" component={Intro} exact={true} />
          <Route path="/menu" component={Menu} exact={true} />
          <Route path="/restaurants" component={Restaurants} exact={true} />
          <Route path="/times" component={Times} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={ellipse} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="help" href="/help">
            <IonIcon icon={ellipse} />
            <IonLabel>Help</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon icon={ellipse} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab="intro" href="/intro">
            <IonIcon icon={ellipse} />
            <IonLabel>Intro</IonLabel>
          </IonTabButton>
          <IonTabButton tab="menu" href="/menu">
            <IonIcon icon={ellipse} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
          <IonTabButton tab="restuarants" href="/restaurants">
            <IonIcon icon={ellipse} />
            <IonLabel>Restaurants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="times" href="/times">
            <IonIcon icon={ellipse} />
            <IonLabel>Times</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
