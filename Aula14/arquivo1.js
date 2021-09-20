/* recebe por parâmetro uma quantidade indefinida de números e efetua a soma dos
 * mesmos.
 *
 * @param {number[]} params
 * @returns {number} valor soma dos parâmetros
 */
// export function 

export function soma (...params) {
 return params.reduce((a, b) => a + b, 0)
}
