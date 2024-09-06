import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePdfWithJsPDF = async (htmlContent) => {
  try {
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.innerHTML = htmlContent;
    document.body.appendChild(tempDiv);

    const canvas = await html2canvas(tempDiv);
    const imgData = canvas.toDataURL('image/png');

    document.body.removeChild(tempDiv);

    const pdf = new jsPDF({
      orientation: 'p', 
      unit: 'mm',
      format: 'a4', 
    });

    pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);

    pdf.save('document.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
