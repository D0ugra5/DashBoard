import type { NextPage } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatorio").email("E-mail inválido"),
  password: yup.string().required("Senha Obrigatória"),
});

const Home: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;
  const handlerSign = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handlerSign)}
      >
        <Stack spacing="4">
          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email")}
          />
          <Input
            error={errors.password}
            label="Senha"
            type="password"
            {...register("password")}
          />
        </Stack>
        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          size="lg"
          colorScheme={"pink"}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
export default Home;
