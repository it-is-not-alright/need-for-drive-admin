type ButtonGroupItem = {
  text: string;
  iconId: string;
  iconClass?: string;
  onClick?: () => void;
};

type ButtonGroupProps = {
  items: ButtonGroupItem[];
};

export { ButtonGroupItem, ButtonGroupProps };
