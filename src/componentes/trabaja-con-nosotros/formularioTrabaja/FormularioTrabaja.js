"use client";

import styles from "./formularioTrabaja.module.css";
import Image from "next/image";
import {
  Heading,
  FormControl,
  Container,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  Text,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/apiTrabaja";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
//import { sendContactBd } from "../lib/bdConect";
import { ChakraProvider } from "@chakra-ui/react";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  file: "",
};
const initState = { values: initValues };

const FormularioTrabaja = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  //const router = useRouter();
  const [checkedItems, setCheckedItems] = useState(false);
  const [file, setFile] = useState();
  const variableFile = file?.name;
  // console.log(variableFile);
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
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      //await sendContactBd(values);
      setTouched({});
      setState(initState);
      //formulario de archivo
      //const form = new FormData();
      //form.set("file", file);
      //const res = await fetch("/api/upload", {
      //  method: "POST",
      //  body: JSON.stringify(file),
      //});
      //const data = await res.json();
      //console.log(data);
      //fin formulario de archivo
      //router.push("/gracias");
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
      <Container className={styles.contenedorFormulario}>
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
          <p className={styles.textoLabel}>Nombre y Apellidos*</p>
          <Input
            type="text"
            placeholder="Nombre y Apellidos..."
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb="4"
        >
          <p className={styles.textoLabel}>Teléfono*</p>
          <Input
            placeholder="Teléfono..."
            type="number"
            inputMode="numeric"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb="4"
        >
          <p className={styles.textoLabel}>Correo electrónico*</p>
          <Input
            placeholder="Correo electrónico..."
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.subject && !values.subject}
          //box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          mb="4"
        >
          <p className={styles.textoLabel}>
            ¿En qué ciudad te interesaría trabajar?*
          </p>
          <Input
            placeholder="Ciudad..."
            //color="#fff"
            //className={styles.inputPista}
            type="text"
            //inputMode="numeric"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        {/*<FormControl
          isRequired
          isInvalid={touched.file && !values.file}
          //box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          mb="4"
        >
          <p className={styles.textoLabel}>Sube tu currículum</p>
          <Input
            //color="#fff"
            style={{ border: "none", padding: "0 0 0 33px" }}
            className={styles.inputFile}
            type="file"
            filename={values.file}
            //value={values.file}
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={onBlur}
          />
          <input value={values.file} style={{ display: "none" }} />

          <p>MÁX. 2 MB</p>
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
          </FormControl>*/}
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
        <FormErrorMessage style={{ margin: "0" }}>Required</FormErrorMessage>
        <button
          className={
            !values.name ||
            !values.email ||
            !values.subject ||
            !values.message ||
            checkedItems === false
              ? `${styles.botonEnviar}`
              : `${styles.botonEnviar} ${styles.botonEnviarHabilitado}`
          }
          //background=" #E83C82"
          //variant="outline"
          //borderRadius="13px"
          //width="262px"
          //color="#fff"
          //isLoading={isLoading}
          disabled={
            !values.name ||
            !values.email ||
            !values.subject ||
            !values.message ||
            checkedItems === false ||
            !file === true
          }
          onClick={onSubmit}
        >
          ENVIAR
        </button>
      </Container>
    </ChakraProvider>
  );
};

export default FormularioTrabaja;
