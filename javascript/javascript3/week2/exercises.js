// 1
async function getAnswer () {
 const promise = await fetch('https://yesno.wtf/api')
 const data = await promise.json()
 const answer = await data.answer
   return answer
}
getAnswer()
//2 