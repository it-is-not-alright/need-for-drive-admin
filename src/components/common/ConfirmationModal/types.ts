type ConfirmationModalProps = {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  isDisplayed: boolean;
  onResponse: (confirmed: boolean) => void;
};

export { ConfirmationModalProps };
