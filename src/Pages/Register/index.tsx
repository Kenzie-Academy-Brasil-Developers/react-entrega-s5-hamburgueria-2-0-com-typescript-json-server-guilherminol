import { Form, Content } from "./style";
import { Link } from "react-router-dom";
import PageBalls from "../../Components/PageBalls";
import SecondaryButton from "../../Components/SecondaryButton";
import Logo from "../../Components/Logo";
import HomePagePhrase from "../../Components/HomePagePhrase";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import api from "../../Services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
interface OnSubmitProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório"),
    password: yup.string().required("Senha Obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas Diferentes"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunc = (data: OnSubmitProps) => {
    const { name, email, password } = data;
    const apiData = {
      email,
      password,
      name,
      cart: [],
    };
    api
      .post("/users", apiData)
      .then((response) => {
        toast.success("Usuário Criado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
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
          <TextField
            variant="outlined"
            required
            {...register("name")}
            label="Nome"
            fullWidth
          />
          <TextField
            variant="outlined"
            required
            {...register("email")}
            label="Email"
            fullWidth
          />
          <TextField
            variant="outlined"
            required
            {...register("password")}
            label="Senha"
            fullWidth
          />
          <TextField
            variant="outlined"
            required
            {...register("confirmPassword")}
            label="Confirme sua senha"
            fullWidth
          />

          <SecondaryButton>Cadastrar</SecondaryButton>
        </Form>
      </section>
    </Content>
  );
};
export default Register;
