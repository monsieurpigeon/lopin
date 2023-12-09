import Step from "./Step";

export default function ConnectSupabaseSteps() {
  return (
    <ol>
      <Step title="Create Supabase project">
        <p>
          Head over to{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            rel="noreferrer"
          >
            database.new
          </a>{" "}
          and create a new Supabase project.
        </p>
      </Step>

      <Step title="Declare environment variables">
        <p>
          Rename the <span>.env.example</span> file in your Next.js app to{" "}
          <span>.env.local</span> and populate with values from{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            rel="noreferrer"
          >
            your Supabase project's API Settings
          </a>
          .
        </p>
      </Step>

      <Step title="Restart your Next.js development server">
        <p>
          You may need to quit your Next.js development server and run{" "}
          <span>npm run dev</span> again to load the new environment variables.
        </p>
      </Step>

      <Step title="Refresh the page">
        <p>
          You may need to refresh the page for Next.js to load the new
          environment variables.
        </p>
      </Step>
    </ol>
  );
}
