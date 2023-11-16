"use client";
import styles from "./formularioTrabaja.module.css";
import {
  FormControl,
  Container,
  Input,
  FormErrorMessage,
  Text,
  useToast,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../../../lib/apiTrabaja";
import { ChakraProvider } from "@chakra-ui/react";
import { file } from "../../../utilities/fireBaseConfig";
//import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initValues = {
  name: "",
  telefono: "",
  correo: "",
  ciudad: "",
  curriculum: "",
};
const initState = { values: initValues };
const FormularioTrabajaFirebase = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const [checkedItems, setCheckedItems] = useState(false);
  const [curriculum, setCurriculum] = useState();
  const [nombre, setNombre] = useState();
  const [pesoArchivo, setPesoArchivo] = useState();
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));
  const handleChangeNombre = (e) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        name: e.target.value,
      },
    }));
  const handleChangeTelefono = (e) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        telefono: e.target.value,
      },
    }));
  const handleChangeCorreo = (e) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        correo: e.target.value,
      },
    }));
  const handleChangeCiudad = (e) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        ciudad: e.target.value,
      },
    }));
  const handleChangeFile = (e) => {
    setPesoArchivo(e.target.files[0]);
    const archivo = ref(file, `Curriculums/${nombre}`);
    if (e.target.files[0]?.size < 2000000) {
      uploadBytes(archivo, e.target.files[0]).then((data) => {
        getDownloadURL(data.ref).then((val) => {
          setCurriculum(val);
          setState((prev) => ({
            ...prev,
            values: {
              ...prev.values,
              curriculum: val,
            },
          }));
        });
      });
    }
  };
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      window.location.href = window.location.href;
      //const valRef = collection(text, "textoData");
      //await addDoc(valRef, { txtVal: nombre, archivoUrl: curriculum });
      toast({
        title: "Mensaje enviado",
        status: "success",
        duration: 2000,
        position: "top",
      });
      setTouched({});
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
            required
            type="text"
            placeholder="Nombre y Apellidos..."
            name="name"
            errorBorderColor="red.300"
            onChange={(e) => {
              handleChangeNombre(e);
              setNombre(e.target.value);
            }}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.telefono && !values.telefono}
          mb="4"
        >
          <p className={styles.textoLabel}>Teléfono*</p>
          <Input
            placeholder="Teléfono..."
            type="number"
            inputMode="numeric"
            name="telefono"
            onChange={(e) => handleChangeTelefono(e)}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.correo && !values.correo}
          mb="4"
        >
          <p className={styles.textoLabel}>Correo electrónico*</p>
          <Input
            placeholder="Correo electrónico..."
            type="email"
            name="correo"
            onChange={(e) => handleChangeCorreo(e)}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.ciudad && !values.ciudad}
          mb="4"
        >
          <p className={styles.textoLabel}>
            ¿En qué ciudad te interesaría trabajar?*
          </p>
          <Input
            placeholder="Ciudad..."
            type="text"
            name="ciudad"
            onChange={(e) => handleChangeCiudad(e)}
            onBlur={onBlur}
          />
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={touched.curriculum && !values.curriculum}
          mb="4"
        >
          <p className={styles.textoLabel}>Sube tu currículum</p>
          <Input
            //color="#fff"
            style={{ border: "none", padding: "0 0 0 33px" }}
            className={styles.inputFile}
            type="file"
            onChange={(e) => {
              handleChangeFile(e);
            }}
          />

          <p>MÁX. 2 MB</p>
          {pesoArchivo?.size > 2000000 ? <p>Excede tamaño de 2 megas</p> : ""}
          <FormErrorMessage style={{ margin: "0" }}>
            Se Requiere
          </FormErrorMessage>
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
        <FormErrorMessage style={{ margin: "0" }}>Required</FormErrorMessage>
        <Button
          isLoading={isLoading}
          className={
            !values.name ||
            !values.telefono ||
            !values.correo ||
            !values.ciudad ||
            !curriculum ||
            pesoArchivo?.size > 2000000 ||
            checkedItems === false
              ? `${styles.botonEnviar}`
              : `${styles.botonEnviar} ${styles.botonEnviarHabilitado}`
          }
          isDisabled={
            !values.name ||
            !values.telefono ||
            !values.correo ||
            !values.ciudad ||
            !curriculum ||
            checkedItems === false ||
            pesoArchivo?.size > 2000000
          }
          onClick={onSubmit}
        >
          ENVIAR
        </Button>
      </Container>
    </ChakraProvider>
  );
};

export default FormularioTrabajaFirebase;
