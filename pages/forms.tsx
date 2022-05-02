import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
    username: string;
    password: string;
    email: string;
    errors?: string;
}

export default function Forms() {
    const {register, handleSubmit, formState: { errors }, watch, setValue, setError, reset } = useForm<LoginForm>({mode:"onChange"});
    const onValid = (data: LoginForm) => {
        console.log("valid")
        setError("errors", {message:"Backed is offline"})
    };
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors);
    };
    console.log(watch("email"))
    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <input
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        message: "Username should be longfer than 5 chars.",
                        value: 5,
                    }
                })}
                type="text"
                placeholder="Username"
            />
            <input {...register("email", {
                required: "Email is required",
                validate: {
                    notGmail: (value) => !value.includes("gmail.com") || "Gmail is not allowed",
                    },
                })}
                type="email"
                placeholder="Email" 
                className={`${Boolean(errors.email?.message) ? "border-red-500" : "" }`}
            />
            {errors.email?.message}
            <input {...register("password", {
                required: "Password is required",
                })}
                type="password"
                placeholder="Password"
            />
            <input type="submit" value="Create Account" />
            {errors.errors?.message}
        </form>
    );
}
