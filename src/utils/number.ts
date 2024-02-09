function numberAsCurrency(
  num: number,
  addCurrencySign: boolean = true,
): string {
  const base = String(num)
    .match(/.{1,3}(?=(.{3})*$)/g)
    .join(' ');
  return `${base} ${addCurrencySign ? '₽' : ''}`;
}

function numberAsCurrencyRange(num1: number, num2: number): string {
  return `${numberAsCurrency(num1, false)} - ${numberAsCurrency(num2)}`;
}

export { numberAsCurrency, numberAsCurrencyRange };
