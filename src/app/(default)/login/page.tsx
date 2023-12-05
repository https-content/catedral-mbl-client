import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fazer login",
};

export default function LoginPage() {
  return (
    <div className="w-full flex justify-center p-12 min-h-screen items-center">
      <div className="flex flex-col space-y-6 text-white">
        <div>
          <h1 className="font-bold text-[32px]">Catedral MBL</h1>
          <p>Fazer login</p>
        </div>
        <div className="w-full md:w-[394px] min-h-[267px] bg-neutral-950 rounded-md flex flex-col justify-between p-5">
          <div className="flex flex-col space-y-5">
            <input
              placeholder="Nome de usuário ou email"
              className="outline outline-1 px-3 py-1.5 outline-neutral-400 bg-black rounded-sm focus-within:outline-yellow-500"
              type="text"
            />
            <div className="flex flex-col items-end space-y-2">
              <input
                placeholder="Senha"
                className="outline w-full outline-1 px-3 py-1.5 outline-neutral-400 bg-black rounded-sm focus-within:outline-yellow-500"
                type="password"
              />
              <Link
                className="text-neutral-500 text-[14px] hover:text-yellow-500"
                href="recover-account"
              >
                Esqueci minha senha
              </Link>
            </div>
          </div>
          <div>
            <Link className="underline" href="/register-account">
              Não tenho uma conta
            </Link>
          </div>
        </div>
        <div>
          <button className="w-full bg-black outline text-yellow-500 outline-1 o hover:outline-yellow-500  transition-colors duration-500 rounded-md flex justify-between p-4 hover:text-black font-bold hover:bg-yellow-500">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
