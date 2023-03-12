import Layout from "@/components/Layout";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const routerVariants = {
  hidden: {
    opacity: 0,
    x:'100vw'
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {type:'spring', delay:0.2, duration: 5 },
  },
  exit:{
    x:'-100vw',
    transition:{
      ease:"easeIn"
    }
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <motion.div
          key={router.route}
          variants={routerVariants}
          initial="hidden"
          animate="visible"
          exit='exit'
        >
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
