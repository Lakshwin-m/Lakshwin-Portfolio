// src/pages/Resume.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    // Open Google Drive resume in new tab
    window.open(
      "https://drive.google.com/file/d/10FHua80D3ovBD3tTFx5_FLGMc3_ekmTp/view?usp=sharing",
      "_blank"
    );

    // Redirect current tab back to homepage
    navigate("/");
  }, [navigate]);

  return null; // Nothing visible
}
