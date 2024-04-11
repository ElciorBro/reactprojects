
export const calculateString = (operation) => {
  const percentageRegex = /(\d+(\.\d+)?%)/g; // Expresión regular para detectar porcentajes
  const percentageMatches = operation.match(percentageRegex); // Array con los porcentajes encontrados

  if (percentageMatches) {
    for (let match of percentageMatches) {
      const toCalculate = operation.substring(0, operation.indexOf(match) -1)
      const stringCalculated = eval(toCalculate);
      const percentageValue = parseFloat(match); // Convertir porcentaje a decimal
      const result = stringCalculated * percentageValue / 100
      operation = operation.replace(match, result); // Reemplazar el porcentaje en la operación con su valor decimal
    }
  }

  try {
    const result = eval(operation);
    return result;
  } catch (error) {
    console.log('Error al calcular:');
    console.log(error);
    return false;
  }
};
