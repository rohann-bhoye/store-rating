import { useSelector } from "react-redux";
export default function Home() {
  const { user } = useSelector((state) => state.userData);
  const { name, role, email, address } = user;
  return (
    <main>
     
    </main>
  );
}

