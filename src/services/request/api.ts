import axios from 'axios';
import { reactive } from 'vue';

async function login (username: string, password: string): Promise<boolean> {
    try {
        // const response = await axios.post('/api/auth/login', {
        //     username: username,
        //     password: password
        // });

        const response = reactive({
            status: 200,
            data: {
                user:{
                     name: 'Thang',
                     age: 26,
                    },
                token: '123456'
            }
        });

        // const response = reactive({
        //     status: 401,
        //     data: {
        //         message: 'Invalid username or password'
        //     }
        // });

        if (response.status === 200) {
            window.localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            window.localStorage.setItem("token", JSON.stringify(response.data.token));
            return true;
        }
    } catch (e) {
        console.log(e);
    }
    return false;
}

async function logout () {
    window.localStorage.clear();
    return true;
}

export {
    login,
    logout
}