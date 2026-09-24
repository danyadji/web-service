const accents = ['bg-brand-pinelight', 'bg-sky-100', 'bg-brand-lime/40'];

function BrowserMock({ kind, accent }) {
    return (
        <div className="w-60 shrink-0 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 sm:w-72">
            <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50 px-3 py-2" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-brand-lime" />
                <span className="ml-2 h-4 flex-1 rounded-full bg-zinc-200/70" />
            </div>
            <div className="flex gap-2.5 p-3">
                <div className="w-10 shrink-0 space-y-1.5 pt-1" aria-hidden="true">
                    <div className="h-5 w-5 rounded-md bg-brand-pine" />
                    <div className="h-1.5 rounded bg-zinc-200" />
                    <div className="h-1.5 rounded bg-zinc-200" />
                    <div className="h-1.5 w-3/4 rounded bg-zinc-200" />
                </div>
                <div className="flex-1 space-y-2">
                    <div className={`h-16 rounded-lg sm:h-20 ${accent}`} />
                    <div className="h-2 rounded bg-zinc-200" />
                    <div className="h-2 w-2/3 rounded bg-zinc-200" />
                    <div className="flex gap-1.5 pt-1">
                        <div className="h-5 w-14 rounded-full bg-brand-pine" />
                        <div className="h-5 w-14 rounded-full border border-zinc-300" />
                    </div>
                </div>
            </div>
            <p className="border-t border-zinc-100 px-3 py-1.5 text-[11px] font-medium text-zinc-500">Contoh: {kind}</p>
        </div>
    );
}

function PhoneMock({ kind, accent }) {
    return (
        <div className="w-36 shrink-0 overflow-hidden rounded-[1.75rem] bg-white shadow-xl ring-1 ring-black/5 sm:w-40">
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-zinc-300" aria-hidden="true" />
            <div className="space-y-2 p-2.5">
                <div className={`h-24 rounded-xl sm:h-28 ${accent}`} />
                <div className="h-2 rounded bg-zinc-200" />
                <div className="h-2 w-3/4 rounded bg-zinc-200" />
                <div className="h-7 rounded-full bg-brand-pine" />
                <div className="flex gap-1.5">
                    <div className="h-8 flex-1 rounded-lg bg-zinc-100" />
                    <div className="h-8 flex-1 rounded-lg bg-zinc-100" />
                </div>
                <p className="pt-0.5 text-[11px] font-medium text-zinc-500">Contoh: {kind}</p>
            </div>
        </div>
    );
}

export default function ShowcaseCard({ slot, index }) {
    const accent = accents[index % accents.length];
    return (
        <div className={`${slot.tilt} transition-transform duration-300 hover:rotate-0`}>
            {slot.frame === 'phone' ? (
                <PhoneMock kind={slot.kind} accent={accent} />
            ) : (
                <BrowserMock kind={slot.kind} accent={accent} />
            )}
        </div>
    );
}
