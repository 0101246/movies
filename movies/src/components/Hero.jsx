const Hero = () => {
    return (
      <div className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white ">
        <div className="text-center p-6">
          <h1 className="text-5xl font-bold mb-4">Welcome...</h1>
          <p className="text-xl mb-8">
            Millions of movies, TV shows, and people to discover. Explore now.
          </p>
          <input
            type="text"
            placeholder="Search for a movie, TV show, person..."
            className="px-6 py-3 rounded-full bg-white bg-opacity-20 text-black w-full max-w-2xl"
          />
        </div>
      </div>
    );
  };
  
  export default Hero;