import { Form, Content } from "./styles";
import { useHistory } from "react-router-dom";
import PageBalls from "../../Components/PageBalls";
import TextFieldComponent from "../../Components/TextField";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";
import Logo from "../../Components/Logo";
import HomePagePhrase from "../../Components/HomePagePhrase";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface OnSubmitProps {
  email: string;
  password: string;
}
const Login = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunc = (data: OnSubmitProps) => {
    console.log(data);
  };
  return (
    <Content>
      <section>
        <Logo />
        <HomePagePhrase />
        <PageBalls />
      </section>
      <section>
        <Form onSubmit={handleSubmit(onSubmitFunc)}>
          <h3>Login</h3>
          <TextFieldComponent {...register("email")} label="Email" />
          <TextFieldComponent {...register("password")} label="Senha" />
          <MainButton>Logar</MainButton>
          <p>Crie sua conta para saborear muitas delícias e matar sua fome</p>
          <SecondaryButton onClick={() => history.push("/register")}>
            Cadastrar
          </SecondaryButton>
        </Form>
      </section>
    </Content>
  );
};
export default Login;
