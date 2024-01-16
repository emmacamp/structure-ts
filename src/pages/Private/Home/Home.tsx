import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    const user = useSelector((store: AppStore) => store.user);
    console.log(`user: ${user}`);
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome{user.name}</p>
      <Link to='/dashboard'>go to dashboard</Link>
    </div>
  )
}

export default Home