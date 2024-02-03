enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
}

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: ButtonType;
  pending?: boolean;
};

export { ButtonProps, ButtonType };
