enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
}

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: ButtonType;
  pending?: boolean;
  isDisabled?: boolean;
};

export { ButtonProps, ButtonType };
