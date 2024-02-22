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

const numberAsSize = (num: number, decimals: number = 2): string => {
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(num) / Math.log(k));
  return `${parseFloat((num / k ** i).toFixed(decimals))} ${sizes[i]}`;
};

export { numberAsCurrency, numberAsCurrencyRange, numberAsSize };
