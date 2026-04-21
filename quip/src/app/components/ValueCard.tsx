interface ValueCardProps {
  title: string;
  description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
  return (
    <div className="reveal bg-bg-card border border-border rounded-[20px] p-6 hover:border-border-hover transition-colors">
      <h4 className="font-[var(--font-sora)] font-semibold text-base tracking-[-0.3px] text-text-primary mb-2">
        {title}
      </h4>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
