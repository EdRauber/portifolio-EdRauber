import { useId, useState } from 'react';
import {
  Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Stack,
  Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { experienceFields } from '../data/portfolio.js';

export function ProjectMeta({ project }) {
  return (
    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
      <Typography component="p" variant="subtitle2" color="primary">{project.period}</Typography>
      {project.status && <Chip label={project.status} size="small" />}
    </Stack>
  );
}

export function ProjectDetails({ project }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Button
        variant="outlined"
        className="project-details-button"
        aria-label={`Ver detalhes de ${project.name}`}
        onClick={() => setOpen(true)}
      >
        Ver detalhes
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={titleId}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
        scroll="paper"
      >
        <DialogTitle id={titleId}>{project.name}</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2.5}>
            <div>
              <ProjectMeta project={project} />
              <Typography className="body-copy" sx={{ mt: 0.75 }}>Equipe de {project.teamSize} integrantes</Typography>
              {project.statusNote && (
                <Typography className="body-copy" sx={{ mt: 0.75 }}>{project.statusNote}</Typography>
              )}
            </div>
            <section>
              <Typography component="h3" variant="subtitle1" fontWeight={700}>Sobre o projeto</Typography>
              <Typography className="body-copy">{project.about}</Typography>
              <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: 'wrap', mt: 1.25 }}>
                {project.technologies.map((technology) => <Chip key={technology} label={technology} />)}
              </Stack>
            </section>
            {experienceFields.map(({ key, label }) => (
              <section key={key}>
                <Typography component="h3" variant="subtitle1" fontWeight={700}>{label}</Typography>
                <Typography className="body-copy">{project.account[key]}</Typography>
              </section>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
