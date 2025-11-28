export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const to = "horsemanof411@gmail.com";

  try {
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service_id: "service_xxxxxx",    // 🔴 Replace with your real ID
        template_id: "template_xxxxxx",  // 🔴 Replace with your real ID
        user_id: "xxxxxx",               // 🔴 Replace with your real User ID
        template_params: {
          name,
          email,
          message,
          to_email: to
        }
      })
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
