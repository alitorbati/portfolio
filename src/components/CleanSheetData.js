const CleanSheetData = (props) => {
  if (!props.data) return null
  const cleanData = props.data.map(item => {
    const cleanItem = {}
    Object
      .keys(item)
      .filter(key => key.includes('gsx$'))
      .forEach(key => {
        cleanItem[key.replace('gsx$', '')] = item[key].$t
      })
    return cleanItem
  })

  return props.children({ data: cleanData })
}

export default CleanSheetData
