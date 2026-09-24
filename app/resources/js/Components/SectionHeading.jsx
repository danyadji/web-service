export default function SectionHeading({ eyebrow, title, titleId, description, align, tone }) {
    const centered = align === 'center';
    const dark = tone === 'dark';
    return (
        <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
            {eyebrow && (
                <p className={`flex items-center gap-2 text-sm font-medium ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    {centered && <span aria-hidden="true" className="mx-auto hidden" />}
                    <span aria-hidden="true" className={`inline-block h-1.5 w-1.5 rounded-full ${dark ? 'bg-brand-lime' : 'bg-brand-pine'}`} />
                    {eyebrow}
                </p>
            )}
            <h2
                id={titleId}
                className={`mt-2 font-display text-3xl uppercase tracking-wide sm:text-4xl ${dark ? 'text-white' : 'text-zinc-950'}`}
            >
                {title}
            </h2>
            {description && (
                <p className={`mt-2 text-base leading-relaxed ${dark ? 'text-zinc-300' : 'text-zinc-700'}`}>{description}</p>
            )}
        </div>
    );
}
