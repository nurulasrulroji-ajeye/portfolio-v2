import { sendMail } from "@/service/mailService";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        const { name, subject, email, message } = req.body;
        await sendMail(
          `${subject}`,
          `${process.env.MY_EMAIL}`,
          `<p>You have a contact form submission</p><br>
          <p><strong>Name: </strong> ${name}</p><br>
          <p><strong>Email: </strong> ${email}</p><br>
          <p><strong>Message: </strong></p><br>
          <p>${message}</p>`
        );
        res.status(200).send({ status: 200, msg: "yeeeey, message sent !" });
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;