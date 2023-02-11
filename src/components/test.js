function solution(str) {
  var len = Math.floor(str.length / 2)
  for (var i = 0; i < len; i++) {
    if (str[i] === '?') {
      str[i] = str[str.length - i - 1]
      continue
    }
    if (str[str.length - i - 1] === '?') {
      str[str.length - i - 1] = str[i]
    }
    if (str[i] !== str[str.length - i - 1]) {
      return 'NO'
    }
  }
  return str
}
solution('?ab??a')
