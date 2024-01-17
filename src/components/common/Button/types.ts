enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
}

type ButtonProps = {
  text: string;
  type?: ButtonType;
  onClick: () => void;
};

export { ButtonProps, ButtonType };
