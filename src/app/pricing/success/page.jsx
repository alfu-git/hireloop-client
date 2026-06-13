import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { postSubscriptionInfo } from "@/lib/actions/actions";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    // update user plan
    const subsInfo = { email: customerEmail, planId: metadata.planId };

    const res = await postSubscriptionInfo(subsInfo);

    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#111111] rounded-2xl shadow-xl p-8 text-center border border-gray-300">
          {/* Success Icon */}
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-400/10 mb-5">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">Payment Successful 🎉</h2>

          {/* Description */}
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Thanks for your purchase! A confirmation email has been sent to
            <br />
            <span className="font-medium text-white/90">{customerEmail}</span>
          </p>

          {/* Support */}
          <p className="text-xs text-white/70 mb-6">
            Need help? Contact{" "}
            <a
              href="mailto:orders@example.com"
              className="text-blue-600 hover:underline"
            >
              orders@example.com
            </a>
          </p>

          {/* Button */}
          <Link href="/">
            <button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    );
  }
}
