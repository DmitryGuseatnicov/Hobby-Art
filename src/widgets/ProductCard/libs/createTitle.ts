type TitleArgs = {
  type: string;
  brand: string;
  sku: string;
};

const createTitle = (args: TitleArgs) => {
  const { type, brand, sku } = args;
  return `${type} ${brand} ${sku} `;
};

export { createTitle };
