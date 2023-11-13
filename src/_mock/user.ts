const users = [...Array(5)].map((_, index) => ({
  id: index + 1,
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: `Nayan Datta ${index + 1}`,
  company: "ABC Ltd.",
  email: "nayan@yahoo.com",
  phone: "0155801150.",
  isVerified: "true",
  status: "active",
  role: "Full Stack Designer"
}));

export default users;
