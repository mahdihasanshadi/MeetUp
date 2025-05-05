import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <section className="max-w-2xl w-full flex flex-col items-center text-center py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
          Welcome to <span className="text-teal-500">MeetUp</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 font-medium">
          Connect, communicate, and collaborate in real-time. MeetUp brings people together for seamless online and offline experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register" className="px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg shadow transition">
            Get Started
          </Link>
          <Link href="/auth/login" className="px-8 py-3 rounded-lg bg-white/80 dark:bg-gray-900/80 border border-teal-300 dark:border-teal-700 text-teal-600 dark:text-teal-400 font-bold text-lg shadow hover:bg-teal-50 dark:hover:bg-gray-800 transition">
            Sign In
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingPage; 