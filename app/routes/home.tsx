import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumer Clud" },
    { name: "description", content: "Smart feedback for updating your resume" },
  ];
}

export default function Home() {
  const {isLoading, auth, } = usePuterStore();
      const location = useLocation();
      const next = location.search.split('/auth?next=')[1];
      const navigate = useNavigate();

      useEffect(()=>{
          if(auth.isAuthenticated) navigate(next);
      }, [auth.isAuthenticated])


  return <main className="bg-[url('/images/bg-main.svg')]">
    <Navbar/>
    
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your applications and resume ratings</h1>
        <h2>Use Ai-powered feedback for resume enhancements</h2>
      </div>
      {resumes.length >0 && (<div className="resumes-section">
      {resumes.map((resume) => {
        return<ResumeCard key={resume.id} resume={resume}></ResumeCard>
      })}
      </div>
      )}

    </section>

  
    </main>;
}
