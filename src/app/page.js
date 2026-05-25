import Internships from "./internships/Internships";
import { getInternships } from "../services/api";

export default async function Home() {
  const internships = await getInternships();

  return <Internships internships={internships} />;
}
