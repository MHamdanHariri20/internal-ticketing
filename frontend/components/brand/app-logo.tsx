type AppLogoProps = {
  className?: string;
};

export function AppLogo({ className }: AppLogoProps) {
  return (
    <div className={className}>
      <h1 className="text-center text-xl font-bold tracking-tight lg:text-left lg:text-3xl">
        <span className="lg:hidden">IT</span>

        <span className="hidden lg:inline">
          Internal Ticketing
        </span>
      </h1>

      <p className="mt-1 hidden text-sm text-muted-foreground lg:block">
        Manage support requests efficiently.
      </p>
    </div>
  );
}