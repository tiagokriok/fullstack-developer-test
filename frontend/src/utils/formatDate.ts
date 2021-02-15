const formatDate = (value: Date): string => {
  const date = value.toLocaleDateString('pt-BR');

  const [day, month, year] = date.split('/');

  return `${year}-${month}-${day}`;
};

export default formatDate;
