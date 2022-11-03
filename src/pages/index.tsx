import type { NextPage } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const Home: NextPage = () => {
  const { register, handleSubmit, formState } = useForm();

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
          <Input label="E-mail" type="email" {...register("email")} />
          <Input label="Senha" type="password" {...register("password")} />
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
