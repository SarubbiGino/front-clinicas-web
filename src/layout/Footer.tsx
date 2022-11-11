import { Link, Stack, Typography, useMediaQuery, Box } from "@mui/material";
import { Facebook, Twitter, Instagram, Phone } from "@mui/icons-material";
import styles from "../../styles/Footer.module.css"


const Footer = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      width={"100%"}
      alignItems={{
        xs: "center",
        md: "flex-start",
      }}
      alignContent={{
        xs: "center",
        md: "flex-start",
      }}
      justifyContent={"space-around"}
      py={"2rem"}

    >
      <Stack
        className={styles.footerleft} 
        alignItems={{ xs: "center", md: "start" }}
      >
        <Typography variant={"h5"} className="subtitle bold" textAlign={"center"}>
          ¿Querés comunicarte con nosotros?
        </Typography>
        <Stack direction={"column"} justifyContent={"flex-start"} alignItems={"start"}
        >
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: "1rem",

          }}>
            <Link href="https://es-la.facebook.com/amhclinicas/" color={"inherit"}
              className={styles.link}
            >
              <Facebook color="inherit" />
            </Link>
            <a href="https://es-la.facebook.com/amhclinicas/" className={styles.alink}  >Facebook</a>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: "1rem",
          }}>
            <Link
              className={styles.link}
              href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              color={"inherit"}
            >
              <Twitter color="inherit" />
            </Link>
            <a href="https://twitter.com/Prensaclinicas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className={styles.alink}  >Twitter</a>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: "1rem",
          }}>

            <Link
              className={styles.link}
              href="https://www.instagram.com/hospitaldeclinicasok/?hl=es"
              color={"inherit"}
            >
              <Instagram color="inherit" />
            </Link>
            <a href="https://www.instagram.com/hospitaldeclinicasok/?hl=es" className={styles.alink} >Instagram</a>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: "1rem",
          }}
          >
            <Link href="tel:011 5950-8000" color={"inherit"}
              className={styles.link}
            >

              <Phone color="inherit" />
            </Link>
            <a href="tel:011 5950-8000" className={styles.alink} >WhatsApp</a>
          </Box>
        </Stack>
      </Stack>
      <Stack
        textAlign={{ xs: "center", md: "start" }}
      >
        <Typography variant={"h5"} className="subtitle bold" textAlign={"center"}>
          Desarrollado por
        </Typography>
        <Box sx={{
          display: "flex",
          flexDirection: "column",

        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
          }}>
            <a href="mailto:gsarubbi28@gmail.com" className={styles.alink} >Gino Sarubbi</a>
            <a href="mailto:nazareno.fiorentino22@gmail.com"className={styles.alink}  >Nazareno Fiorentino</a>
            <a href="mailto:jerebarbozaperi2@gmail.com" className={styles.alink} >Jeremias Barboza</a>
            <a href="mailto:silvanicol830@gmail.com" className={styles.alink} >Nicole Silva</a>
          </Box>
        </Box>
      </Stack>
      <Stack
        textAlign={{ xs: "center", md: "start" }}>
        <Typography variant={"h5"} className="subtitle bold" textAlign={"center"}>
          Ilustrado por
        </Typography>
        <Box>
          <a href="mailto:pepoyiyo@gmail.com" className={styles.alink} >Sofia San Martin</a>
        </Box>
      </Stack>

    </Stack>
  );
};

export default Footer;
