import axios from 'axios';
import { reactive } from 'vue';

export async function login (username: string, password: string): Promise<boolean> {
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

        if (response.status === 200) {
            console.log(response.status);
            window.localStorage.setItem("userInfo", JSON.stringify(response.data.user));
            window.localStorage.setItem("token", JSON.stringify(response.data.token));
            return true;
        }
    } catch (e) {
        console.log(e);
    }
    console.log("False");
    return false;
}