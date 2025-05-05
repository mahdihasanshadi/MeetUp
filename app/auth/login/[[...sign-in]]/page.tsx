import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2 tracking-tight text-center">
          Welcome to <span className="text-teal-500">MeetUp</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mb-8 text-center text-base font-medium">
          We care about your connections.
        </p>
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <SignIn
            afterSignInUrl="/home"
            appearance={{
              baseTheme: neobrutalism,
              elements: {
                card: "rounded-2xl shadow-xl bg-white/95 dark:bg-gray-900/90 border border-teal-200 dark:border-teal-700 p-6",
                headerTitle: "text-2xl font-bold text-teal-600 mb-2",
                headerSubtitle: "text-base text-gray-500 dark:text-gray-300 mb-4",
                formButtonPrimary: "bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg py-2 mt-4 transition",
                socialButtonsBlockButton: "bg-teal-50 hover:bg-teal-100 text-teal-700 border-teal-200 rounded-lg",
                dividerRow: "my-4",
                footerAction: "text-sm text-gray-500 dark:text-gray-300 mt-4",
              },
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default LoginPage; 