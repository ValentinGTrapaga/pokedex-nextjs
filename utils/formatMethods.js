export const formatMethods = (method) => {
  if (method == undefined) {
    return ['']
  }

  let methodArr = []
  if (typeof method == 'string') {
    methodArr.push(method)
  } else {
    methodArr = method.map((method) => method)
  }
  return methodArr
}
