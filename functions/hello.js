exports.handler = async function (event, context){
  return {
    statusCode: 200,
    body:JSON.stringify({
      name : 'Hotg',
      age : 61,
      email:'wlgns359@gmail.com'
    })
  }
}