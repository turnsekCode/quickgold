export const sendContactForm = async (data) =>
  fetch("http://localhost:3000/api/contactTrabaja", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
