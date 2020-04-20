import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonFab, IonFabButton, IonModal, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { trash, add, text } from 'ionicons/icons';

export interface Todo {
  id: number;
  text: string;
}

const Planner: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');

  const addTodo = () => {
    const nextId = todos.reduce((id, todo) => Math.max(id, todo.id!), 0) + 1;
    const todo: Todo = {
      id: nextId,
      text
    };
    setTodos([...todos, todo]);
    setShowModal(false);
    setText('');
  };

  const deleteTodo = (todo: Todo) => {
    const newTodos = todos.filter(t => t.id !== todo.id);
    setTodos(newTodos);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Sofa Planner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {todos.length === 0 ? (
          <IonHeader>Write down your dream sofa</IonHeader>
        ) : (
            <IonList>
              {todos.map((todo, i) => (
                <IonItem key={i}>
                  <IonLabel>
                    <h2>{todo.text}</h2>
                  </IonLabel>
                  <IonIcon data-testid="trash" icon={trash} color="danger" slot="end" onClick={() => deleteTodo(todo)} />
                </IonItem>
              ))}
            </IonList>
          )}

        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton title="Add Todo" onClick={() => setShowModal(true)}>
            <IonIcon data-icon="add" icon={add} />
          </IonFabButton>
        </IonFab>
        <IonModal
          onDidDismiss={() => setShowModal(false)}
          isOpen={showModal}
        >
          <IonToolbar>
            <IonHeader style={{ paddingLeft: '20px' }}>Add A Post</IonHeader>
          </IonToolbar>
          <IonContent>
            <IonList>
              <IonItem>
                <IonLabel position="stacked" style={{ paddingLeft: '20px' }}>New Entry</IonLabel>
                <IonInput id="todo" title="Todo Text" value={text} onIonChange={e => setText(e.detail.value!)} />
              </IonItem>
            </IonList>
            <IonButton expand="block" onClick={addTodo}>
              Add
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>

    </IonPage>
  );
};

export default Planner;