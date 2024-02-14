enum ButtonStyle {
  Primary = 'simple-btn-primary',
  Secondary = 'simple-btn-secondary',
  Danger = 'simple-btn-danger',
}

type ButtonProps = {
  text: string;
  onClick: () => void;
  style?: ButtonStyle;
  pending?: boolean;
  isDisabled?: boolean;
};

export { ButtonProps, ButtonStyle };
