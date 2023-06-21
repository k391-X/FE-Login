import axios from 'axios'
// import { reactive } from 'vue';

async function login(username: string, password: string): Promise<boolean> {
  try {
    console.log({ username, password })
    const response = await axios.post('http://localhost:7042/api/data/user', {
      username: username,
      password: password,
    })

    console.log(response)
    // const response = reactive({
    //     status: 200,
    //     data: {
    //         user:{
    //              name: 'Thang',
    //              age: 26,
    //             },
    //         token: '123456'
    //     }
    // });

    // const response = reactive({
    //     status: 401,
    //     data: {
    //         message: 'Invalid username or password'
    //     }
    // });

    if (response.status === 200) {
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify(response.data.user),
      )
      window.localStorage.setItem('token', JSON.stringify(response.data.token))
      return true
    } else {
      console.log('false')
      return false
    }
  } catch (e) {
    console.log(e)
    return false
  }
}

async function logout() {
  window.localStorage.clear()
  return true
}

export { login, logout }
