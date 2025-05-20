import BreadcrumbsTracker from "../Router/Router";
import { 
    Modal, 
    Box, 
    Button, 
    IconButton 
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function BreadcrumbModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Path</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          width: "90%", maxWidth: 500,
          p: 3, borderRadius: 2,
          boxShadow: 24,
        }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <BreadcrumbsTracker />
        </Box>
      </Modal>
    </>
  );
}

export default BreadcrumbModal;