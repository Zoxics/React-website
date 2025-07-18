import { useEffect, useState } from "react";

interface RecentCommit {
  repo: string;
  message: string;
  url: string;
  date: string;
}

export default function RecentCommit() {
  const [commit, setCommit] = useState<RecentCommit | null>(null);

  useEffect(() => {
    async function fetchLatestCommit() {
      try {
        const res = await fetch(
          "https://api.github.com/users/Zoxics/events/public"
        );
        const events = await res.json();

        const pushEvent = events.find((e: any) => e.type === "PushEvent");

        if (pushEvent && pushEvent.payload.commits.length > 0) {
          const recent = pushEvent.payload.commits[0];
          const repoName = pushEvent.repo.name;
          const commitUrl = `https://github.com/${repoName}/commit/${recent.sha}`;
          const timeStamp = new Date(pushEvent.created_at).toLocaleDateString();

          setCommit({
            repo: repoName,
            message: recent.message,
            url: commitUrl,
            date: timeStamp,
          });
        }
      } catch (err) {
        console.error("Error fetching commit:", err);
      }
    }
    fetchLatestCommit();
  }, []);

  if (!commit) return <p>Loading recent commit...</p>;

  return (
    <div className="relative w-80 sm:w-96 bg-[url('./assets/construction-paper.png')] text-dark font-mono rounded-xl shadow-[5px_5px_0px_0px_#333] p-5 hover:rotate-[2deg] transition duration-200 mx-auto mt-6 border-[3px] border-dark origin-top-left">
      {/* Thumbtack Pin or Circle */}
      <div className="absolute top-2 left-2 w-4 h-4 bg-primary rounded-full shadow-md z-10" />

      <p className="mb-2">
        <strong className="block font-staat text-3xl underline decoration-dark underline-offset-4 text-primary mb-1">
          Recent Commit
        </strong>
        <span className="block text-lg line-clamp-2">{commit.message}</span>
      </p>

      <p className="text-sm">
        <strong>Repo:</strong> {commit.repo} <br />
        <strong>Date:</strong> {commit.date}
      </p>

      <a
        href={commit.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-primary text-light px-6 py-2 font-staat text-xl shadow-md hover:brightness-110 transition"
      >
        View on GitHub
      </a>
    </div>
  );
}
