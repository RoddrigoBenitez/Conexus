import LoginForm from "./login-form";

export default function PageLogin(){
    return(
        <main className="flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg ">
                <LoginForm />
            </div>
        </main>
    )
}