import { Form, Content } from "./style";
import { useHistory, Link } from "react-router-dom";
import PageBalls from "../../Components/PageBalls";
import TextFieldComponent from "../../Components/TextField";
import SecondaryButton from "../../Components/SecondaryButton";
import Logo from "../../Components/Logo";
import HomePagePhrase from "../../Components/HomePagePhrase";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface OnSubmitProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
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
          <div className="FormHeaderContainer">
            <h3>Cadastro</h3>
            <Link to="/">Retornar para o login</Link>
          </div>
          <TextFieldComponent {...register("name")} label="Nome" />
          <TextFieldComponent {...register("email")} label="Email" />
          <TextFieldComponent {...register("password")} label="Senha" />
          <TextFieldComponent {...register("confirmPassword")} label="Senha" />

          <SecondaryButton onClick={() => history.push("/register")}>
            Cadastrar
          </SecondaryButton>
        </Form>
      </section>
    </Content>
  );
};
export default Register;
