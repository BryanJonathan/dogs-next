import LoginResetarForm from "@/components/login/login-resetar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a sua senha | Dogs",
  description: "Resete a sua senha no site Dogs",
}

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  }
}

export default function ResetarPage({  searchParams  }: ResetarSearchParams) {
  console.log(searchParams);
  return (
    <div className="animeLeft">
      <h1 className="title">Redefina sua senha</h1>
      <LoginResetarForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
