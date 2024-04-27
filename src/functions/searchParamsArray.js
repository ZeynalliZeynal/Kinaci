export const searchParamsArray = (
  paramsValues,
  setSearchParams,
  key,
  value,
) => {
  let selectedValues = paramsValues
    ? paramsValues.includes(',')
      ? paramsValues.split(',')
      : [paramsValues]
    : []

  if (selectedValues.includes(value))
    selectedValues = selectedValues.filter((v) => v !== value)
  else selectedValues.push(value)

  setSearchParams((prev) => {
    if (selectedValues.length === 0) prev.delete(key)
    else
      prev.set(
        key,
        selectedValues.length === 1
          ? selectedValues[0]
          : selectedValues.join(','),
      )
    return prev
  })
}
