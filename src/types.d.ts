interface IItem {
  id: number;
  title: string;
  price: { monthly: number; yearly: number };
  storage: string;
  users: string;
  send: string;
}

interface ICardProps {
  item: IItem;
  index: number;
  selectedOption: string;
}

interface ButtonProps {
  index: number; // Define the type of the 'index' prop
}

interface ToogleProps {
  selectedOption: string;
  onOptionChange: (option: string) => void;
}
