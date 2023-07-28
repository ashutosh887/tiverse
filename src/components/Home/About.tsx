import { aboutContent } from "~/config/data";

function About() {
  return (
    <div className="z-10 flex h-[60vh] flex-col items-center">
      <h1 className="mt-8 mb-12 text-3xl font-bold">About</h1>

      <div className="mt-2 flex w-[60%] flex-col space-y-4 text-center text-gray-500">
        {aboutContent.map((content, idx) => (
          <p key={idx} className="text-xl">
          {content}
        </p>
        ))}
      </div>
    </div>
  );
}

export default About;
