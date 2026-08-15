import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#191919] text-white">

  {/* FOOTER CONTENT */}
  <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

      {/* ABOUT */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          نقابة المهندسين بالقاهرة
        </h3>

        <p className="text-sm leading-7 text-white/75">
          نعمل على خدمة المهندسين وتطوير المهنة من خلال باقة متكاملة
          من الخدمات النقابية والمهنية.
        </p>

        <div className="mt-5 space-y-3 text-sm text-white/75">

          <p>
            شارع رمسيس، القاهرة، جمهورية مصر العربية
          </p>

          <p dir="ltr" className="text-right">
            +20 2 1234 5678
          </p>

          <p>
            info@eng-syndicate.eg
          </p>

        </div>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          روابط سريعة
        </h3>

        <ul className="space-y-3 text-sm text-white/75">

          <li>
            <Link
              href="/"
              className="transition hover:text-white"
            >
              الرئيسية
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="transition hover:text-white"
            >
              عن النقابة
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className="transition hover:text-white"
            >
              الخدمات
            </Link>
          </li>

          <li>
            <Link
              href="/committees"
              className="transition hover:text-white"
            >
              اللجان
            </Link>
          </li>

          <li>
            <Link
              href="/departments"
              className="transition hover:text-white"
            >
              إدارات النقابة
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              تواصل معنا
            </Link>
          </li>

        </ul>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          تواصل معنا
        </h3>

        <ul className="space-y-4 text-sm text-white/75">

          <li>
            شارع رمسيس، القاهرة، جمهورية مصر العربية
          </li>

          <li dir="ltr" className="text-right">
            +20 2 1234 5678
          </li>

          <li>
            info@eng-syndicate.eg
          </li>

        </ul>

        <Link
          href="/contact"
          className="mt-6 inline-block text-sm font-semibold text-white transition hover:text-emerald-300"
        >
          تواصل معنا ←
        </Link>
      </div>

      {/* NEWSLETTER */}
      <div>
        <h3 className="mb-5 text-lg font-bold">
          النشرة البريدية
        </h3>

        <p className="mb-5 text-sm leading-7 text-white/75">
          اشترك ليصلك كل جديد من أخبار وخدمات النقابة.
        </p>

        <form className="flex flex-col gap-3">

          <input
            type="email"
            placeholder="بريدك الإلكتروني"
            className="
              w-full
              rounded-lg
              border
              border-white/20
              bg-white
              px-4
              py-3
              text-sm
              text-gray-800
              outline-none
              placeholder:text-gray-400
              focus:border-emerald-400
            "
          />

          <button
            type="submit"
            className="
              rounded-lg
              bg-emerald-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-emerald-700
            "
          >
            اشتراك
          </button>

        </form>
      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/10">

    <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">

      <p className="text-center text-sm text-white/60">
        © 2026 نقابة المهندسين بالقاهرة. جميع الحقوق محفوظة.
      </p>

    </div>

  </div>

</footer>
    </>
  )
}
