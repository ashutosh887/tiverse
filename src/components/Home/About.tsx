function About() {
  return (
    <div className="z-10 flex flex-col items-center h-[60vh]">
      <h1 className="text-3xl font-bold m-16">About</h1>

      <div className="flex flex-col space-y-4 w-[60%] text-center text-gray-500 mt-2">
        <p className="text-xl">
          The only decentralized event management application, offers innovative
          solutions to the challenges faced by traditional centralized event
          management systems
        </p>
        <p className="text-xl">
          One of the core issues it addresses is the elimination of
          intermediaries and the establishment of a transparent, fair, and
          decentralized ecosystem.
        </p>
      </div>
    </div>
  );
}

export default About;
