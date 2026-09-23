export default function SectionHeading({ eyebrow, title, titleId, description, align }) {
    const centered = align === 'center';
    return (
        <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
            {eyebrow && (
                <p className="flex items-center gap-2 text-sm font-medium text-zinc-600">
                    {centered && <span aria-hidden="true" className="mx-auto hidden" />}
                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-orange-600" />
                    {eyebrow}
                </p>
            )}
            <h2
                id={titleId}
                className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl"
            >
                {title}
            </h2>
            {description && (
                <p className="mt-2 text-base leading-relaxed text-zinc-700">{description}</p>
            )}
        </div>
    );
}
