import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function DownloadButton() {

  const { client } = useContext(AuthContext);

  const handleDownload = () => {
    const apiUrl = "http://localhost:3000/report";
    const token = localStorage.getItem("@TOKEN");
    if (!token || !client) {
      console.error("Cliente não autenticado.");
      return;
    }
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Client-Id": client.id,
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "documento.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Erro ao baixar o PDF:", error);
      });
  };
  return <button className="buttonPDF" onClick={handleDownload}>Baixar PDF</button>;
}