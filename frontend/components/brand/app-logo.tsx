type AppLogoProps = {
  className?: string;
};

export function AppLogo({ className }: AppLogoProps) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold tracking-tight">
        Internal Ticketing
      </h1>

      <p className="mt-1 text-sm text-muted-foreground">
        Manage support requests efficiently.
      </p>
    </div>
  );
}