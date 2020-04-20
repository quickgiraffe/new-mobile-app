export interface Message {
    fromName: string;
    subject: string;
    review: string;
    date: string;
    id: number;
  }
  
  const messages: Message[] = [
    {
      fromName: 'Mark Atlanta',
      subject: 'Bought New Sofa',
      review: 'Absolutely beautiiful purchase. Thank you!',
      date: '02/04/20',
      id: 0
    },
    {
      fromName: 'Carey Atlanta',
      subject: 'Great furniture for the living room',
      review: 'Highly recommend',
      date: '04/04/2020',
      id: 1
    },
    {
      fromName: 'Gerald Atlanta',
      subject: 'What I expected',
      review: 'Sweet sofa is amazing!',
      date: '10/04/20',
      id: 2
  
    },
    {
      fromName: 'Randy Atlanta',
      subject: 'Best Sofa!',
      review: 'Thank you. The sofa is amazing!',
      date: '12/04/20',
      id: 3
    },
  ];
  
  export const getMessages = () => messages;
  
  export const getMessage = (id: number) => messages.find(m => m.id === id);