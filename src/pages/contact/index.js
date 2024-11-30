import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import ContactForm from '../../components/contact/contact-form';
import theme from '../../theme';

function ContactPage() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </ThemeProvider>
  );
}

export default ContactPage;
