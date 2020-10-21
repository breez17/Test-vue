export default function (length = 10) {
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const symbolsLen = symbols.length;
  let hash = '';

  for (let i = 0; i < length; i++) {
    hash += symbols.charAt(Math.floor(symbolsLen * Math.random()));
  }

  return hash;
}
