import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "../../constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AuthentiCV" },
    { name: "description", content: "Smart feedback for your CV!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/lg1.jpg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1 className="text-gradient">Track Your Career Moves & CV Performance</h1>
          <h2 className="text-white">Review Your Career Applications & Get Real-Time AI-Powered Feedback</h2>
        </div>
      </section>


        {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}