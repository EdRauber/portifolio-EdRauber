import { Box, Chip, Typography } from '@mui/material';

export function CuidaPreview({ compact = false }) {
  return (
    <Box
      role="img"
      aria-label="Prévia ilustrativa do Cuida+. Uma tela mostra o progresso da meta de hidratação. A outra mostra uma pergunta do quiz de perfil."
      className={compact ? 'project-preview project-preview-compact' : 'project-preview'}
    >
      <div className="preview-phone" aria-hidden="true">
        <Typography className="preview-brand">Cuida+</Typography>
        <Typography className="preview-title">Hidratação</Typography>
        <Typography className="preview-caption">Meta diária</Typography>
        <Typography className="preview-value">750 ml</Typography>
        <span className="preview-progress" />
        <span className="preview-action">Beber água</span>
      </div>
      <div className="preview-phone" aria-hidden="true">
        <Typography className="preview-brand">Cuida+</Typography>
        <Typography className="preview-title">Quiz de perfil</Typography>
        <Typography className="preview-caption">Preferências</Typography>
        <Typography className="preview-question">Exibir água<br />na Home?</Typography>
        <div className="preview-options">
          <Chip label="Sim" />
          <Chip label="Não" />
        </div>
      </div>
    </Box>
  );
}
