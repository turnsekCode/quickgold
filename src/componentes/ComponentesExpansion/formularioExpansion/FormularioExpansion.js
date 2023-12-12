import styles from "./formularioExpansion.module.css";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Text,
  useToast,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/api";
import { ChakraProvider } from "@chakra-ui/react";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };

const FormularioExpansion = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const [checkedItems, setCheckedItems] = useState(false);
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Mensaje enviado",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <ChakraProvider>
      <div className={styles.contenedorTitulo}>
        <p className={styles.contenedorTituloTextoUno}>TE LLAMAMOS</p>
        <p className={styles.contenedorTituloTextoDos}>
          Rellena el siguiente formulario y te llamaremos para ofrecerte toda la
          información que necesitas.
        </p>
      </div>
      <div className={styles.contenedorFormulario}>
        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}
        <FormControl
          isRequired
          position="relative"
          isInvalid={touched.name && !values.name}
          mb="4"
        >
          <Input
            type="text"
            placeholder="Nombre y Apellidos *"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Se Requiere</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          mb="4"
        >
          <Input
            placeholder="Ciudad dónde abrir la tienda *"
            //className={styles.inputPista}
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Se Requiere</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb="4"
        >
          <Input
            placeholder="Teléfono *"
            type="number"
            inputMode="numeric"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Se Requiere</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={touched.email && !values.email}>
          <Input
            placeholder="Correo electrónico *"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Se Requiere</FormErrorMessage>
        </FormControl>
        <Checkbox
          type="checkbox"
          required
          color="#fff"
          isChecked={checkedItems}
          name="checkbox"
          onChange={(e) => setCheckedItems(e.target.checked)}
        >
          He leído y acepto la{" "}
          <a className={styles.linkPoliticas} href="/politica-de-privacidad">
            política de privacidad
          </a>
        </Checkbox>
        <FormErrorMessage>Required</FormErrorMessage>
        <Button
          isLoading={isLoading}
          id="formularioexpansion"
          className={
            !values.name ||
            !values.email ||
            !values.subject ||
            !values.message ||
            checkedItems === false
              ? `${styles.botonEnviar}`
              : `${styles.botonEnviar} ${styles.botonEnviarHabilitado}`
          }
          isDisabled={
            !values.name ||
            !values.email ||
            !values.subject ||
            !values.message ||
            checkedItems === false
          }
          onClick={onSubmit}
        >
          ENVIAR
        </Button>
      </div>
    </ChakraProvider>
  );
};

export default FormularioExpansion;
