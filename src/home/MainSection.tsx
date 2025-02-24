import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const ButtonDonar = () => (
  <Grid item>
    <Button variant="contained" className="button contained" size="large">
      donar
    </Button>
  </Grid>
);

const MainSection = () => {
  const sm = useMediaQuery("(min-width: 600px)");
  const title =
    "¿Sabias que cada donación voluntaria permite salvar hasta cuatro vidas?";
  const subtitle =
    " El proceso solo dura entre 7 a 10 minutos, y con eso ayudas un montón. Podes empezar haciendo click en el botón DONAR de aquí abajo. ";

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        xs: "1fr",
        md: "1fr 1fr",
      }}
      gridTemplateRows="auto"
      gridTemplateAreas={{
        xs: "'title' 'subtitle' 'img' 'btn'",
        md: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
      }}
      sx={{ minHeight: "92vh" }}
      py={{ xs: 2, md: 0 }}
    >
      <Box gridArea={"title"} alignSelf="end" justifySelf={"center"}>
        <Typography
          variant={sm ? "h3" : "h4"}
          textAlign={{
            xs: "center",
            md: "left",
          }}
          className="title"
          maxWidth={"sm"}
        >
          {title}
        </Typography>
      </Box>
      <Box gridArea={"subtitle"} alignSelf="center" justifySelf={"center"}>
        <Typography
          variant="h5"
          className="subtitle"
          textAlign={{
            xs: "center",
            md: "left",
          }}
          sx={{ lineHeight: "1.75" }}
          maxWidth="sm"
          py={{
            xs: 2,
            md: 0,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box gridArea={"img"} alignSelf="center" justifySelf={"center"}>
        <Image
          src="/assets/main.png"
          width={"676px"}
          height={"658px"}
          alt="Pareja con corazon en el centro"
        />
      </Box>
      <Box
        gridArea={"btn"}
        alignSelf="start"
        display={"flex"}
        justifyContent={{
          xs: "center",
          md: "left",
        }}
      >
        <ButtonDonar />
      </Box>
    </Box>
  );
};

export default MainSection;
