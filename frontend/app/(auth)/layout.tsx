export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted p-6">
      {children}
    </main>
  );
}