export const uniqueId = () => {
  return btoa(Math.random()).substring(0, 12)
}