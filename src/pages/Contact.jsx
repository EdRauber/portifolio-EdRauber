import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Button, Card, Stack, TextField, Typography } from '@mui/material';
import { socialProfiles } from '../data/contact.js';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();
const emailConfigured = Boolean(serviceId && templateId && publicKey);

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  async function sendMessage(event) {
    event.preventDefault();
    if (!emailConfigured || sending) return;

    const form = event.currentTarget;
    const values = new FormData(form);
    const message = {
      from_name: values.get('from_name').trim(),
      reply_to: values.get('reply_to').trim(),
      message: values.get('message').trim(),
    };

    if (Object.values(message).some((value) => !value)) {
      setFeedback({ severity: 'error', text: 'Preencha todos os campos para enviar sua mensagem.' });
      return;
    }

    setFeedback(null);
    setSending(true);
    try {
      await emailjs.send(serviceId, templateId, message, { publicKey });
      form.reset();
      setFeedback({ severity: 'success', text: 'Mensagem enviada. Obrigado pelo contato!' });
    } catch {
      setFeedback({ severity: 'error', text: 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <Card component="section" className="contact-card" aria-labelledby="contact-form-title">
      <Stack component="form" spacing={2} onSubmit={sendMessage} aria-busy={sending}>
        <Typography component="h2" className="contact-card-title" id="contact-form-title">Envie uma mensagem</Typography>
        {!emailConfigured && <Alert severity="info">O formulário ainda está em configuração.</Alert>}
        <TextField name="from_name" label="Seu nome" autoComplete="name" required disabled={sending} slotProps={{ htmlInput: { maxLength: 100 } }} />
        <TextField name="reply_to" label="Seu e-mail" type="email" autoComplete="email" required disabled={sending} slotProps={{ htmlInput: { maxLength: 254 } }} />
        <TextField name="message" label="Mensagem" multiline minRows={5} required disabled={sending} slotProps={{ htmlInput: { maxLength: 3000 } }} />
        {feedback && <Alert severity={feedback.severity}>{feedback.text}</Alert>}
        <Button variant="contained" type="submit" disabled={!emailConfigured || sending} sx={{ alignSelf: 'flex-start' }}>
          {sending ? 'Enviando…' : 'Enviar mensagem'}
        </Button>
      </Stack>
    </Card>
  );
}

export function Contact() {
  return (
    <>
      <div className="projects-intro">
        <Typography component="h1" className="projects-title">Contact</Typography>
        <Typography className="lead-copy">Pode me chamar para conversar sobre projetos ou oportunidades.</Typography>
      </div>
      <div className="contact-grid">
        <Card component="section" className="contact-card" aria-labelledby="social-title">
          <Typography component="h2" className="contact-card-title" id="social-title">Redes sociais</Typography>
          <ul className="social-list">
            {socialProfiles.map(({ name, url, unavailable }) => (
              <li key={name} className="social-item">
                {url ? (
                  <Button href={url} target="_blank" rel="noopener noreferrer" variant="outlined">
                    {name} <span aria-hidden="true">↗</span>
                  </Button>
                ) : (
                  <div className="social-unavailable">
                    <Typography fontWeight={600}>{name}</Typography>
                    <Typography className="body-copy">{unavailable}</Typography>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Card>
        <ContactForm />
      </div>
    </>
  );
}
