export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.service_n2g2v3t,
        template_id: process.env.template_2ke7l9z,
        public_key: process.env.s4abuoyG20O-ya9l8,  // ✔ correct field
        template_params: {
          title: "New Contact Message",
          name,
          email,
          message,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: "Email not sent",
      details: error.message,
    });
  }
}
