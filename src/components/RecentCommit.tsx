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
    <div className="p-3 sm:p-4 border-dark border-4 bg-[url('./assets/construction-paper.png')] bg-cover rounded-xl h-72 sm:h-60 font-mono shadow-dark shadow-[5px_5px_0px_0px] overflow-hidden">
      <p className="text-dark text-lg">
        <strong className="font-staat text-primary tracking-wider underline underline-offset-4 text-4xl decoration-dark">
          Most Recent Commit: <br></br>
        </strong>{" "}
        {commit.message}
      </p>
      <p className="text-sm text-dark pb-4">
        <strong>Repo:</strong> {commit.repo}
        <br />
        <strong>Date:</strong> {commit.date}
      </p>
      <a
        href={commit.url}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-light bg-primary py-4 font-staat tracking-wider text-2xl px-12"
      >
        View on GitHub
      </a>
    </div>
  );
}
