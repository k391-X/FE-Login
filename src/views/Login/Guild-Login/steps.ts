import { setPosition } from '../../../utils/types';

const steps = [
    {
        element: '#content',
        popover: {
            title: 'Xin chào mừng tới với trang đăng nhập!',
            description: 'Đây là giao diện đầu tiên trong cuộc gặp của chúng ta!',
            position: setPosition('left')
        }
    },
    {
        element: '#titleLogin',
        popover: {
            title: 'Như bạn cũng có thể thấy. Đây là tiêu đề!',
            description: 'Như bạn có thể thấy đây là khu vực trung tâm của page này!',
            position: setPosition('left')
        }
    },
    {
        element: '#username',
        popover: {
            title: 'Điền tên đăng nhập ở đây!',
            description: 'Nhớ là không nhập kí tự đặc biệt nhé!',
            position: setPosition('right')
        }
    },
    {
        element: '#password',
        popover: {
            title: 'Vị trí để nhập mật khẩu!',
            description: 'Giấu thật kĩ!',
            position: setPosition('right')
        }
    },
    {
        element: '#submitLogin',
        popover: {
            title: 'Điền thông tin xong thì ấn nút này để vào nè!',
            description: 'Kiểm tra thông tin đăng nhập đi đã!',
            position: setPosition('bottom')
        }
    },
    {
        element: '#registerLogin',
        popover: {
            title: 'Chưa có tài khoản ấy hả? Ấn vô đây!',
            description: 'Ấn đi đừng sợ!',
            position: setPosition('bottom')
        }
    },
    {
        element: '#forgotPassword',
        popover: {
            title: 'Nếu quên mật khẩu thì ấn vào đây để lấy lại!',
            description: 'Hi vọng là không quên!',
            position: setPosition('bottom')
        }
    },
];

export { steps };