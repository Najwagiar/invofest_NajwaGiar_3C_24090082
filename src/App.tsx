import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return(
    <div className="grid grid-cols-2 w-full container mx-auto gap-6">
    <LoginForm/>

    <RegisterForm/>
    </div>
  )
}

export default App;
