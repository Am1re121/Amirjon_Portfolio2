let C = 'Я'
let code = C.charCodeAt(0)
let type = ''

if (code >= 48 && code <= 57) type = 'digit'
else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) type = 'lat'
else type = 'rus'

console.log(type)