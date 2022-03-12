
export async function registration({ userName, userEmail, userPassword }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(userName === "" && userEmail === "" && userPassword === "") {
              resolve()
          } else {
              reject()
          }
        }, 1000)
    })
}