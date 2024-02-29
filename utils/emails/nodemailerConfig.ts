const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: "proyectoindit@gmail.com",
    pass: process.env.APP_GMAIL,
  },
};

export default nodemailerConfig;
