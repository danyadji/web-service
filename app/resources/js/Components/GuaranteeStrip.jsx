export default function GuaranteeStrip() {
    return (
        <section aria-label="Garansi pengerjaan" className="bg-orange-700">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                    Rusak karena kami, kami bereskan. Garansi [30] hari setelah serah terima.
                </p>
                <a
                    href="/layanan"
                    className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-orange-800 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Lihat kebijakan lengkap
                </a>
            </div>
        </section>
    );
}
