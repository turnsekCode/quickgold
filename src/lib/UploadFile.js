export const sendContactForm = async (file) => {
  //console.log(file);
  //const form = new FormData();
  //form.set("file", file);
  const res = await fetch("http://localhost:3000/api/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json,",
      body: file,
    },
  });
  const data = await res.json();
};
