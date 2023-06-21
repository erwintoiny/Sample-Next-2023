import prisma from "@/lib/prisma";
export default async function handler(req, res) {
  const { empn, name, username, password, usertype } = req.body;

  try {
    const user = await prisma.employee.create({
      data: {
        empn: empn,
        name: name,
        Username: username,
        password: password,
        Usertype: usertype,
      },
    });
    console.log("User created:", user);
    res.status(200).json({ name: "John Doe" });
  } catch (error) {
    res.json(error);
    res.status(405);
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}
