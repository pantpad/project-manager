export default function generateUniqueID() {
  return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
}
