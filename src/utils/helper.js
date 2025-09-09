import { companyDetails } from "../constant";

// create url param from text
export const createUrlParam = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove all special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with single hyphens
    .replace(/-+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
    .trim() // Remove leading/trailing spaces
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
    

// send whatsapp with form data
export const doWhatsappMsg = (data) => {
  // Construct the WhatsApp message
  const whatsappMessage =
    `Hello,%0A%0A` +
    `I would like to inquire about your services.%0A%0A` +
    `Here are my details:%0A` +
    `• Name: ${data.name}%0A` +
    `• Email: ${data.email}%0A` +
    `• Phone: ${data.phone}%0A%0A` +
    `My Message:%0A` +
    `${data.message}%0A%0A` +
    `Looking forward to your response.%0A` +
    `Best regards,%0A` +
    `${data.name}%0A%0A` +
    `_Submitted via Mecfinity AI Website contact form_`;

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp}?text=${whatsappMessage}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");
};
