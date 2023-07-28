function About() {
  return (
    <div className="z-10 flex h-[60vh] flex-col items-center">
      <h1 className="m-16 text-3xl font-bold">About</h1>

      <div className="mt-2 flex w-[60%] flex-col space-y-4 text-center text-gray-500">
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
