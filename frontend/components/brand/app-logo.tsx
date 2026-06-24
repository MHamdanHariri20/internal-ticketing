type AppLogoProps = {
  className?: string;
};

export function AppLogo({ className }: AppLogoProps) {
  return (
<div className={`flex flex-col items-center lg:items-start ${className}`}>
  <h1 className="text-xl font-bold tracking-tight lg:text-3xl">
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
