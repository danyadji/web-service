const accents = ['bg-orange-100', 'bg-sky-100', 'bg-orange-50'];

function BrowserMock({ kind, accent }) {
    return (
        <div className="w-52 shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm sm:w-64">
            <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-orange-400" />
            </div>
            <div className="space-y-2 p-3">
                <div className={`h-16 rounded-md sm:h-20 ${accent}`} />
                <div className="h-2 rounded bg-zinc-200" />
                <div className="h-2 w-2/3 rounded bg-zinc-200" />
                <div className="flex gap-1.5 pt-1">
                    <div className="h-5 w-14 rounded bg-orange-700" />
                    <div className="h-5 w-14 rounded border border-zinc-300" />
                </div>
                <p className="pt-1 text-[11px] font-medium text-zinc-500">Contoh: {kind}</p>
            </div>
        </div>
    );
}

function PhoneMock({ kind, accent }) {
    return (
        <div className="w-32 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:w-36">
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-zinc-300" aria-hidden="true" />
            <div className="space-y-2 p-2.5">
                <div className={`h-20 rounded-md sm:h-24 ${accent}`} />
                <div className="h-2 rounded bg-zinc-200" />
                <div className="h-2 w-3/4 rounded bg-zinc-200" />
                <div className="h-6 rounded-md bg-orange-700" />
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
