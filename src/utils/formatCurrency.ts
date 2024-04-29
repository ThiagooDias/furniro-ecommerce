export function formatCurrency(value: string) {
  const num = parseFloat(value);

  if (isNaN(num)) {
    throw new Error("O valor fornecido não é um número válido.");
  }

  const formattedNumber = num.toFixed(2);

  const formattedWithThousands = formattedNumber.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  const formattedWithComma = formattedWithThousands.replace(
    /\./g,
    (match, offset, string) => {
      if (offset === string.length - 3) {
        return ",";
      }
      return ".";
    }
  );

  return formattedWithComma;
}
