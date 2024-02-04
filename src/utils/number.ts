function numberAsCurrency(num: number): string {
  const base = String(num)
    .match(/.{1,3}(?=(.{3})*$)/g)
    .join(' ');
  return `${base} ₽`;
}

export { numberAsCurrency };
