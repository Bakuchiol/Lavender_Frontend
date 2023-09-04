import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin.js";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { login, loading, error } = useLogin();

    const onSubmit = async data => {
        await login(data.email, data.password);
        reset({ email: '', password: '' })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3> Log In </h3>
            <input 
                type="email" 
                {...register("email", { required: 'required field' })}
                placeholder="email"
                autoComplete="off"
            />
            <p>{ errors.email?.message }</p>
            <input 
                type="password" 
                {...register("password", { required: 'required field' })}
                placeholder="password"
            />
            <p>{ errors.password?.message }</p>
            <button 
                type="submit"
                disabled={loading}
            > 
                Log In 
            </button>
            {error && <div>{ error }</div>}
        </form>
    );
}

export default Login;