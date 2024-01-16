import { createUser } from "@/redux/states/user.state";
import { getMorty } from "@/services";
import { useDispatch } from "react-redux";

export const Login = () => {
    const dispatch = useDispatch();
    // const [, setUser] = useState<User>({
    //     id: 0,
    //     name: '',
    //     email: '',
    // });


    const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user = (await getMorty()).data;
            console.log(user);
            dispatch(createUser(user));
        } catch (error) {
            console.log(error);
        }
    }


    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const newUser: User = {
    //         id: Math.floor(Math.random() * 100),
    //         name: 'John Doe',
    //         email: 'jdoe@gmail.com',
    //     }
    //     dispatch(createUser(newUser))
    //     setUser(newUser)
    //     navigate('/home')

    // }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={logIn}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
