import Navbar from "@/components/NavBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <section className="max-w-2xl w-full flex flex-col items-center text-center py-24">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg">
            Welcome back to <span className="text-teal-500">MeetUp</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 font-medium">
            This is your dashboard. Here you can join meetings, view your schedule, and manage your connections.
          </p>
        </section>
      </main>
    </>
  );
};

export default HomePage;