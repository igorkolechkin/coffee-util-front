export const formattingDate = (date: string) => {
  const reverseDate = date.split('-').reverse()
  reverseDate[2] = reverseDate[2].slice(2)

  return reverseDate.join('.')
}

export const getCollData = (count: number, price: string, value: string) => {
  return value === 'count' ? count : Math.round(Number(price) * count)
}

export const getSumOfData = (counts: (number | string)[]) => {
  return Math.round(counts
    .map(count => Number(count) ? Number(count) : 0)
    .reduce((total, count) => total += Number(count), 0))
}

export const changeMonthNumber = (number: number) => number <= 9 ? `0${number}` : `${number}`