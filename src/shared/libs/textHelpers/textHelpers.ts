const textSlice = (text: string, numOfLatter: number): string => {
  return `${text.slice(0, numOfLatter)}...`;
};

export { textSlice };
