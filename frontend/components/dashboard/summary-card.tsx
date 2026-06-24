import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SummaryCardProps = {
  title: string;
  value: number;
};

export function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}