const datesAreOnSameDay = (first, second) => {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth() && first.getDate() === second.getDate();
}

const datesAreConsecutive = (first, second) => {
  return first.getFullYear() === second.getFullYear() &&first.getMonth() === second.getMonth() && first.getDate() === second.getDate() + 1;
}

export { datesAreOnSameDay, datesAreConsecutive }