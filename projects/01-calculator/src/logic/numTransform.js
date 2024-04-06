export const extractPercentage = (str) => {
    const pattern = /(\d+(?:\.\d+)?)([%+*/-])$/;
    const matches = str.match(pattern);
    if (matches) {
      const porcentaje = matches[1] + matches[2] + '%';
      return porcentaje;
    } else {
      return null;
    }
}

export const addPercentage = (lista) => {
    const op = ['+', '-', '*', '/'];

    return lista.map(elemento => {
        if (!op.some(simbolo => elemento.startsWith(simbolo))) {
          return elemento + '%';
        }
        return elemento;
      });
    
}


export const numTransform = (stringToTransform) => {
    // Separamos con % como divisor
    const fragment = stringToTransform.split('%')
    // agregamos % a los terminos que tienen porcentaje
    const fragPercentage = addPercentage(fragment)
    // sustituimos todos los terminos de porcentaje por el valor
    const termWithoutPercen = fragPercentage.addPercentage.map((frag) => {
        if (frag[frag.length - 1] === '%') {
            // termino del porcentaje
            const percentage = extractPercentage(frag);
            const numPercen = percentage.slice(0, -1);
            const simbol = percentage[0];

            // termino sin porcentaje
            const fragWithout = frag.replace(percentage, '');
            // resultado del termino sin porcentaje
            const val1 = eval(fragWithout);
            // valor del porcentaje
            const val2 =  val1 * numPercen / 100;

            // resultado final del termino transformado
            const result = fragWithout + simbol + val2;
            return result;
        }
        return frag;
    })

    return termWithoutPercen.join('')
}