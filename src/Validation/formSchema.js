import * as yup from 'yup';
import { string } from 'yup';

const formSchema = yup.object().shape({
    username:yup    
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup  
        .string()
        .email('Must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    tos: yup    
        .boolean()
        .oneOf([true], 'Must accept terms and conditions')
})

export default formSchema